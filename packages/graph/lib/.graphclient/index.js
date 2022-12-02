"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribe = exports.execute = exports.getBuiltGraphClient = exports.createBuiltMeshHTTPHandler = exports.getMeshOptions = exports.rawServeConfig = void 0;
const utils_1 = require("@graphql-mesh/utils");
const utils_2 = require("@graphql-mesh/utils");
const cache_localforage_1 = __importDefault(require("@graphql-mesh/cache-localforage"));
const fetch_1 = require("@whatwg-node/fetch");
const graphql_1 = __importDefault(require("@graphql-mesh/graphql"));
const merger_bare_1 = __importDefault(require("@graphql-mesh/merger-bare"));
const http_1 = require("@graphql-mesh/http");
const runtime_1 = require("@graphql-mesh/runtime");
const store_1 = require("@graphql-mesh/store");
const cross_helpers_1 = require("@graphql-mesh/cross-helpers");
const baseDir = cross_helpers_1.path.join(typeof __dirname === 'string' ? __dirname : '/', '..');
const importFn = (moduleId) => {
    const relativeModuleId = (cross_helpers_1.path.isAbsolute(moduleId) ? cross_helpers_1.path.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
    switch (relativeModuleId) {
        case ".graphclient/sources/hypercerts-goerli/introspectionSchema":
            return Promise.resolve().then(() => __importStar(require("./sources/hypercerts-goerli/introspectionSchema")));
        default:
            return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
    }
};
const rootStore = new store_1.MeshStore('.graphclient', new store_1.FsStoreStorageAdapter({
    cwd: baseDir,
    importFn,
    fileType: "ts",
}), {
    readonly: true,
    validate: false
});
exports.rawServeConfig = undefined;
function getMeshOptions() {
    return __awaiter(this, void 0, void 0, function* () {
        const pubsub = new utils_1.PubSub();
        const sourcesStore = rootStore.child('sources');
        const logger = new utils_2.DefaultLogger("GraphClient");
        const cache = new cache_localforage_1.default(Object.assign(Object.assign({}, {}), { importFn, store: rootStore.child('cache'), pubsub,
            logger }));
        const sources = [];
        const transforms = [];
        const additionalEnvelopPlugins = [];
        const hypercertsGoerliTransforms = [];
        const additionalTypeDefs = [];
        const hypercertsGoerliHandler = new graphql_1.default({
            name: "hypercerts-goerli",
            config: { "endpoint": "https://api.thegraph.com/subgraphs/name/bitbeckers/hypercerts-goerli" },
            baseDir,
            cache,
            pubsub,
            store: sourcesStore.child("hypercerts-goerli"),
            logger: logger.child("hypercerts-goerli"),
            importFn,
        });
        sources[0] = {
            name: 'hypercerts-goerli',
            handler: hypercertsGoerliHandler,
            transforms: hypercertsGoerliTransforms
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
                return [];
            },
            fetchFn: fetch_1.fetch,
        };
    });
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
//# sourceMappingURL=index.js.map