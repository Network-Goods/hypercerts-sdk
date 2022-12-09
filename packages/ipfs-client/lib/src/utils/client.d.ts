declare const connectIPFS: () => Promise<void | {
    hashers: import("ipfs-core-utils/dist/src/multihashes").Multihashes;
    bases: import("ipfs-core-utils/dist/src/multibases").Multibases;
    preload: import("ipfs-core/dist/src/types").Preload;
    name: import("ipfs-core/dist/src/components/name").NameAPI;
    ipns: import("ipfs-core/dist/src/components/ipns").IPNSAPI;
    pin: import("ipfs-core/dist/src/components/pin").PinAPI;
    resolve: (path: string, opts?: import("ipfs-core-types/src/root").ResolveOptions | undefined) => Promise<string>;
    block: import("ipfs-core/dist/src/components/block").BlockAPI;
    refs: ((ipfsPath: import("ipfs-core-types/src/utils").IPFSPath | import("ipfs-core-types/src/utils").IPFSPath[], options?: import("ipfs-core-types/src/refs").RefsOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/refs").RefsResult>) & {
        local: (options?: import("ipfs-core-types").AbortOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/refs").RefsResult>;
    };
    start: () => Promise<void>;
    stop: (options?: import("ipfs-core-types").AbortOptions | undefined) => Promise<void>;
    dht: {
        get: (key: string | Uint8Array, options?: import("ipfs-core-types").AbortOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/dht").QueryEvent>;
        put: (key: string | Uint8Array, value: Uint8Array, options?: import("ipfs-core-types").AbortOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/dht").QueryEvent>;
        findProvs: (cid: import("multiformats/dist/types/src").CID<unknown, number, number, import("multiformats/dist/types/src").Version>, options?: import("ipfs-core-types").AbortOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/dht").QueryEvent>;
        findPeer: (peerId: import("@libp2p/interface-peer-id").PeerId, options?: import("ipfs-core-types").AbortOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/dht").QueryEvent>;
        provide: (cid: import("multiformats/dist/types/src").CID<unknown, number, number, import("multiformats/dist/types/src").Version>, options?: import("ipfs-core-types/src/dht").DHTProvideOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/dht").QueryEvent>;
        query: (peerId: import("multiformats/dist/types/src").CID<unknown, number, number, import("multiformats/dist/types/src").Version> | import("@libp2p/interface-peer-id").PeerId, options?: import("ipfs-core-types").AbortOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/dht").QueryEvent>;
    };
    pubsub: {
        subscribe: (topic: string, handler: import("@libp2p/interfaces/dist/src/events").EventHandler<import("@libp2p/interface-pubsub").Message>, options?: import("ipfs-core-types/src/pubsub").SubscribeOptions | undefined) => Promise<void>;
        unsubscribe: (topic: string, handler: import("@libp2p/interfaces/dist/src/events").EventHandler<import("@libp2p/interface-pubsub").Message> | undefined, options?: import("ipfs-core-types").AbortOptions | undefined) => Promise<void>;
        publish: (topic: string, data: Uint8Array, options?: import("ipfs-core-types").AbortOptions | undefined) => Promise<void>;
        ls: (options?: import("ipfs-core-types").AbortOptions | undefined) => Promise<string[]>;
        peers: (topic: string, options?: import("ipfs-core-types").AbortOptions | undefined) => Promise<import("@libp2p/interface-peer-id").PeerId[]>;
    };
    dns: (domain: string, options?: import("ipfs-core-types/src/root").DNSOptions | undefined) => Promise<string>;
    isOnline: () => boolean;
    id: (options?: import("ipfs-core-types/src/root").IDOptions | undefined) => Promise<import("ipfs-core-types/src/root").IDResult>;
    version: (_options?: import("ipfs-core-types").AbortOptions | undefined) => Promise<import("ipfs-core-types/src/root").VersionResult>;
    bitswap: import("ipfs-core/dist/src/components/bitswap").BitswapAPI;
    bootstrap: import("ipfs-core/dist/src/components/bootstrap").BootstrapAPI;
    config: {
        getAll: (options?: import("ipfs-core-types").AbortOptions | undefined) => Promise<import("ipfs-core-types/src/config").Config>;
        get: (key: string, options: import("ipfs-core-types").AbortOptions | undefined) => Promise<string | object>;
        set: (key: string, value: any, options: import("ipfs-core-types").AbortOptions | undefined) => Promise<void>;
        replace: (value: import("ipfs-core-types/src/config").Config, options: import("ipfs-core-types").AbortOptions | undefined) => Promise<void>;
        profiles: {
            apply: (profileName: string, options?: import("ipfs-core-types/src/config/profiles").ProfilesApplyOptions | undefined) => Promise<import("ipfs-core-types/src/config/profiles").ProfilesApplyResult>;
            list: (_options: import("ipfs-core-types").AbortOptions | undefined) => Promise<import("ipfs-core-types/src/config/profiles").Profile[]>;
        };
    };
    ping: (peerId: import("@libp2p/interface-peer-id").PeerId, options?: import("ipfs-core-types/src/root").PingOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/root").PingResult>;
    add: (entry: import("ipfs-core-types/src/utils").ImportCandidate, options?: import("ipfs-core-types/src/root").AddOptions | undefined) => Promise<import("ipfs-core-types/src/root").AddResult>;
    addAll: (source: import("ipfs-core-types/src/utils").ImportCandidateStream, options?: (import("ipfs-core-types/src/root").AddAllOptions & import("ipfs-core-types").AbortOptions) | undefined) => AsyncIterable<import("ipfs-core-types/src/root").AddResult>;
    cat: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: import("ipfs-core-types/src/root").CatOptions | undefined) => AsyncIterable<Uint8Array>;
    get: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: import("ipfs-core-types/src/root").GetOptions | undefined) => AsyncIterable<Uint8Array>;
    ls: (ipfsPath: import("ipfs-core-types/src/utils").IPFSPath, options?: import("ipfs-core-types/src/root").ListOptions | undefined) => AsyncIterable<import("ipfs-core-types/src/root").IPFSEntry>;
    dag: import("ipfs-core/dist/src/components/dag").DagAPI;
    files: import("ipfs-core-types/src/files").API<any>;
    key: import("ipfs-core/dist/src/components/key").KeyAPI;
    object: import("ipfs-core/dist/src/components/object").ObjectAPI;
    repo: import("ipfs-core/dist/src/components/repo").RepoAPI;
    stats: import("ipfs-core/dist/src/components/stats").StatsAPI;
    swarm: import("ipfs-core/dist/src/components/swarm").SwarmAPI;
    commands: () => Promise<never>;
    diag: {
        cmds: () => Promise<never>;
        net: () => Promise<never>;
        sys: () => Promise<never>;
    };
    log: {
        level: () => Promise<never>;
        ls: () => Promise<never>;
        tail: () => AsyncGenerator<never, never, unknown>;
    };
    mount: () => Promise<never>;
    codecs: import("ipfs-core-utils/dist/src/multicodecs").Multicodecs;
    init(): Promise<void>;
}>;
export { connectIPFS };
//# sourceMappingURL=client.d.ts.map