import findTargets from './findTargets';
import findWebmentionEndpoint from './findWebmentionEndpoint';
import sendWebmention from './sendWebmention';

const { RETRY_DELAY_SECONDS, MAX_RETRIES } = process.env;
const RETRY_DELAY = +(RETRY_DELAY_SECONDS || 0) * 1000;

async function sendWebmentions(sourceUrl: string, targetUrls: string[]): Promise<unknown[]> {
    const promises: Promise<unknown>[] = [];
    targetUrls.forEach(async (targetUrl) => {
        let endpoint: string | null = null;
        try {
            endpoint = await findWebmentionEndpoint(targetUrl);
        } catch (err) {
            return;
        }
        if (endpoint) {
            console.log(`Webmention endpoint found for ${targetUrl}: ${endpoint}`);
            const promise = sendWebmention(sourceUrl, targetUrl, endpoint);
            promise.catch((err) => {
                console.log(`Error sending webmention for target ${targetUrl}: ${err.message}`);
            });
            promises.push(promise);
        }
    });
    return Promise.all(promises);
}

export default async function processPage(url: string, count = 0): Promise<unknown[]> {
    let targetUrls: string[];
    try {
        targetUrls = await findTargets(url);
    } catch (err) {
        if (count < +(MAX_RETRIES || 5)) {
            setTimeout(processPage.bind(null, url, count + 1), RETRY_DELAY);
            return [];
        }
        console.log(`${url}: max retries exceeded. Abandoning.`);
        throw Error(`Unable to process page: ${url}`);
    }
    console.log(`${targetUrls.length} target URLs found`);
    return sendWebmentions(url, targetUrls);
}
