// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace GitHubWebhook {
    /**
     * One or more commits are pushed to a repository branch or tag.
     *
     * Note: You will not receive a webhook for this event when you push more than
     * three tags at once.
     *
     * See documentation: https://developer.github.com/webhooks/event-payloads/#push
     */
    export interface Push {
        ref: string;
        before: string;
        after: string;
        commits: Commit[];
        head_commit: Commit;
        pusher: Pusher;
        repository: Repository;
        organization: Organization;
        installation: Installation;
        sender: Sender;
    }

    interface Repository {
        // TODO: Add fields
    }

    interface Organization {
        // TODO: Add fields
    }

    interface Installation {
        // TODO: Add fields
    }

    export interface Commit {
        id: string;
        tree_id: string;
        distinct: boolean;
        message: string;
        timestamp: string;
        url: string;
        author: Author;
        committer: Author;
        added: string[];
        removed: string[];
        modified: string;
    }

    interface Author {
        name: string;
        email: string;
        username: string;
    }

    interface Pusher {
        name: string;
        email: string;
    }

    interface Sender {
        login: string;
        id: number;
        node_id: string;
        avatar_url: string;
        gravatar_id: string;
        url: string;
        html_url: string;
        followers_url: string;
        following_url: string;
        gists_url: string;
        starred_url: string;
        subscriptions_url: string;
        organizations_url: string;
        repos_url: string;
        events_url: string;
        received_events_url: string;
        type: 'User';
        site_admin: boolean;
    }
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
