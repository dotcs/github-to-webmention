import microformat from 'microformat-node';
import cheerio from 'cheerio';
import { MicroformatData, MicroformatItem } from './types';

export default function getTargetUrls(html: string, sourceUrl: string): Promise<string[]> {
    return new Promise((resolve, reject) => {
        microformat.get({ html }, (err, data) => {
            if (err) {
                console.log('Error parsing microformats', err);
                return reject(err);
            }

            const hItem = findMainHItem(sourceUrl, data);
            if (!hItem || !hItem.properties || !hItem.properties.content) {
                return resolve([]);
            }

            let links: string[] = [];
            links = concatIfPresent(links, hItem.properties['in-reply-to']);
            links = concatIfPresent(links, hItem.properties['bookmark-of']);
            links = concatIfPresent(links, hItem.properties['like-of']);
            links = concatIfPresent(links, hItem.properties['repost-of']);
            if (hItem.properties.content) {
                hItem.properties.content.forEach((content) => {
                    const contentLinks = findContentLinks(content.html);
                    // TODO: resolve relative urls
                    links = links.concat(contentLinks);
                });
            }
            // console.log('links found:', links);
            resolve(links);
        });
    });
}

/** 
 * Returns an concatenated list of two lists where the second list is optional.
 */
function concatIfPresent<T>(list: T[], items?: T[]): T[] {
    if (items) {
        return list.concat(items);
    }
    return list;
}

/**
 * Returns the main HItem based on the URL.
 * 
 * This method attempts to macth the `url` param against the microformat items
 * and returns the first entry that matches.
 * In case no entry matches the first item is returned that is not an h-card.
 */
export function findMainHItem(url: string, mfData: MicroformatData): MicroformatItem | null {
    if (!mfData.items) {
        return null;
    }
    const main = mfData.items.find((item) => {
        if (item.properties.url) {
            return item.properties.url.includes(url);
        }
        return false;
    });
    if (main) {
        return main;
    }

    // Make a guess: return first item that's not an h-card
    const entry = mfData.items.find((item) => !item.type.includes('h-card'));
    return entry || null;
}

/** Returns all `href` attribtues of anchor elements in an HTML string */
export function findContentLinks(html: string): string[] {
    const $ = cheerio.load(html);
    const links: string[] = [];
    $('a[href]').each((i, link) => {
        links.push($(link).prop('href'));
    });
    return links;
}
