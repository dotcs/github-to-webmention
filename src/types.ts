export interface RequestBody {
    ref: string;
    commits: Commit;
}

export interface Commit {
    added: string[];
}

export interface MicroformatData {
    items: MicroformatItem[];
}

type MicroformatType = 'h-card' | 'h-entry';

export interface MicroformatItem {
    type: MicroformatType[];
    properties: Partial<MicroformatItemProps>;
    children?: MicroformatItem[];
    rels?: {
        [key: string]: string[];
    };
    'rel-urls?': {
        [key: string]: {
            rels: string[];
            text?: string;
            hreflang?: string;
            media?: string;
        };
    };
}

interface MicroformatItemProps {
    url: string[];
    photo: string[];
    org: string[];
    published: string[];
    content: HEntryContent[];
    name: string[];
    'in-reply-to': string[];
    'bookmark-of': string[];
    'like-of': string[];
    'repost-of': string[];
    'bridgy-omit-link': string[];
}

interface HEntryContent {
    value: string;
    html: string;
}
