import { URL } from 'url';

export function absUrl(url: string, base: string): string {
    return new URL(url, base).href;
}
