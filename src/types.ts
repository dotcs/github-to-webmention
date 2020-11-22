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

export interface MicroformatItem {
    type: string;
    properties: {
        url: string;
        content: {
            html: string;
        }[];
        [key: string]: any;
    };
}
