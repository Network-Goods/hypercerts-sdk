"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSdk = exports.ClaimTokensByClaimDocument = exports.ClaimTokensByOwnerDocument = exports.ClaimByIdDocument = exports.RecentClaimsDocument = exports.ClaimsByOwnerDocument = exports.getBuiltGraphSDK = exports.subscribe = exports.execute = exports.getBuiltGraphClient = exports.createBuiltMeshHTTPHandler = exports.getMeshOptions = exports.rawServeConfig = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("@graphql-mesh/utils");
const utils_2 = require("@graphql-mesh/utils");
const utils_3 = require("@graphql-mesh/utils");
const cache_localforage_1 = tslib_1.__importDefault(require("@graphql-mesh/cache-localforage"));
const fetch_1 = require("@whatwg-node/fetch");
const graphql_1 = tslib_1.__importDefault(require("@graphql-mesh/graphql"));
const merger_bare_1 = tslib_1.__importDefault(require("@graphql-mesh/merger-bare"));
const utils_4 = require("@graphql-mesh/utils");
const http_1 = require("@graphql-mesh/http");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const cross_helpers_1 = require("@graphql-mesh/cross-helpers");
const baseDir = cross_helpers_1.path.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (cross_helpers_1.path.isAbsolute(moduleId) ? cross_helpers_1.path.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/hypercerts-dev/introspectionSchema.js":
            return Promise.resolve().then(() => tslib_1.__importStar(require("./sources/hypercerts-dev/introspectionSchema.js")));
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new store_1.MeshStore('.graphclient', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "js",
}), {
    readonly: true,
    validate: false
});
exports.rawServeConfig = undefined;
async function getMeshOptions() {
    const pubsub = new utils_2.PubSub();
    const sourcesStore = rootStore.child('sources');
    const logger = new utils_3.DefaultLogger("GraphClient");
    const cache = new cache_localforage_1.default({
        ...{},
        importFn,
        store: rootStore.child('cache'),
        pubsub,
        logger,
    });
    const sources = [];
    const transforms = [];
    const additionalEnvelopPlugins = [];
    const hypercertsDevTransforms = [];
    const additionalTypeDefs = [];
    const hypercertsDevHandler = new graphql_1.default({
        name: "hypercerts-dev",
        config: { "endpoint": "https://api.thegraph.com/subgraphs/name/bitbeckers/hypercerts-dev" },
        baseDir,
        cache,
        pubsub,
        store: sourcesStore.child("hypercerts-dev"),
        logger: logger.child("hypercerts-dev"),
        importFn,
    });
    sources[0] = {
        name: 'hypercerts-dev',
        handler: hypercertsDevHandler,
        transforms: hypercertsDevTransforms
    };
    const additionalResolvers = [];
    const merger = new merger_bare_1.default({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
    });
    return {
        sources,
        transforms,
        additionalTypeDefs,
        additionalResolvers,
        cache,
        pubsub,
        merger,
        logger,
        additionalEnvelopPlugins,
        get documents() {
            return [
                {
                    document: exports.ClaimsByOwnerDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.ClaimsByOwnerDocument);
                    },
                    location: 'ClaimsByOwnerDocument.graphql'
                }, {
                    document: exports.RecentClaimsDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.RecentClaimsDocument);
                    },
                    location: 'RecentClaimsDocument.graphql'
                }, {
                    document: exports.ClaimByIdDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.ClaimByIdDocument);
                    },
                    location: 'ClaimByIdDocument.graphql'
                }, {
                    document: exports.ClaimTokensByOwnerDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.ClaimTokensByOwnerDocument);
                    },
                    location: 'ClaimTokensByOwnerDocument.graphql'
                }, {
                    document: exports.ClaimTokensByClaimDocument,
                    get rawSDL() {
                        return (0, utils_4.printWithCache)(exports.ClaimTokensByClaimDocument);
                    },
                    location: 'ClaimTokensByClaimDocument.graphql'
                }
            ];
        },
        fetchFn: fetch_1.fetch,
    };
}
exports.getMeshOptions = getMeshOptions;
function createBuiltMeshHTTPHandler() {
    return (0, http_1.createMeshHTTPHandler)({
        baseDir,
        getBuiltMesh: getBuiltGraphClient,
        rawServeConfig: undefined,
    });
}
exports.createBuiltMeshHTTPHandler = createBuiltMeshHTTPHandler;
let meshInstance$;
function getBuiltGraphClient() {
    if (meshInstance$ == null) {
        meshInstance$ = getMeshOptions().then(meshOptions => (0, runtime_1.getMesh)(meshOptions)).then(mesh => {
            const id = mesh.pubsub.subscribe('destroy', () => {
                meshInstance$ = undefined;
                mesh.pubsub.unsubscribe(id);
            });
            return mesh;
        });
    }
    return meshInstance$;
}
exports.getBuiltGraphClient = getBuiltGraphClient;
const execute = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));
exports.execute = execute;
const subscribe = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
exports.subscribe = subscribe;
function getBuiltGraphSDK(globalContext) {
    const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
    return getSdk((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
exports.getBuiltGraphSDK = getBuiltGraphSDK;
exports.ClaimsByOwnerDocument = (0, utils_1.gql) `
    query ClaimsByOwner($owner: Bytes = "") {
  claims(where: {owner: $owner}) {
    contract
    tokenID
    creator
    id
    owner
    totalUnits
    uri
  }
}
    `;
exports.RecentClaimsDocument = (0, utils_1.gql) `
    query RecentClaims($first: Int = 10) {
  claims(orderDirection: desc, orderBy: id, first: $first) {
    contract
    tokenID
    creator
    id
    owner
    totalUnits
    uri
  }
}
    `;
exports.ClaimByIdDocument = (0, utils_1.gql) `
    query ClaimById($id: ID!) {
  claim(id: $id) {
    contract
    tokenID
    creator
    id
    owner
    totalUnits
    uri
  }
}
    `;
exports.ClaimTokensByOwnerDocument = (0, utils_1.gql) `
    query ClaimTokensByOwner($owner: Bytes = "") {
  claimTokens(where: {owner: $owner}) {
    id
    owner
    tokenID
    units
  }
}
    `;
exports.ClaimTokensByClaimDocument = (0, utils_1.gql) `
    query ClaimTokensByClaim($claimId: String!) {
  claimTokens(where: {claim: $claimId}) {
    id
    owner
    tokenID
    units
  }
}
    `;
function getSdk(requester) {
    return {
        ClaimsByOwner(variables, options) {
            return requester(exports.ClaimsByOwnerDocument, variables, options);
        },
        RecentClaims(variables, options) {
            return requester(exports.RecentClaimsDocument, variables, options);
        },
        ClaimById(variables, options) {
            return requester(exports.ClaimByIdDocument, variables, options);
        },
        ClaimTokensByOwner(variables, options) {
            return requester(exports.ClaimTokensByOwnerDocument, variables, options);
        },
        ClaimTokensByClaim(variables, options) {
            return requester(exports.ClaimTokensByClaimDocument, variables, options);
        }
    };
}
exports.getSdk = getSdk;
