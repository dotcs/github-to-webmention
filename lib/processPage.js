import findTargets from './findTargets';
import findWebmentionEndpoint from './findWebmentionEndpoint';
import sendWebmention from './sendWebmention';

const {RETRY_DELAY_SECONDS, MAX_RETRIES} = process.env;
const RETRY_DELAY = RETRY_DELAY_SECONDS * 1000;

async function sendWebmentions(sourceUrl, targetUrls) {
  const promises = [];
  targetUrls.forEach(async targetUrl => {
    let endpoint;
    try {
      endpoint = await findWebmentionEndpoint(targetUrl);
    } catch (err) {
      return;
    }
    if (endpoint) {
      console.log(`Webmention endpoint found for ${targetUrl}: ${endpoint}`);
      const promise = sendWebmention(sourceUrl, targetUrl, endpoint);
      promise.catch(err => {
        console.log(
          `Error sending webmention for target ${targetUrl}: ${err.message}`
        );
      });
      promises.push(promise);
    }
  });
  return Promise.all(promises);
}

export default async function processPage(url, count = 0) {
  let targetUrls;
  try {
    targetUrls = await findTargets(url);
  } catch (err) {
    if (count < MAX_RETRIES) {
      setTimeout(processPage.bind(null, url, count + 1), RETRY_DELAY);
      return false;
    }
    console.log(`${url}: max retries exceeded. Abandoning.`);
    throw Error(`Unable to process page: ${url}`);
  }
  console.log(`${targetUrls.length} target URLs found`);
  return sendWebmentions(url, targetUrls);
}
