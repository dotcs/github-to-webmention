import { MicroformatData } from "../src/types";

declare module 'microformat-node' {

    declare namespace MicroformatNode {
        interface Root {
            get(options: GetOptions, cb: ReqCallback): void;
        }

        interface GetOptions {
            html: string;
        }
        type ReqCallback = (err: Error, data: MicroformatData) => void;
    }

    const module: MicroformatNode.Root;
    export = module;
};