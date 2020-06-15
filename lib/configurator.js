"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.load();
exports.default = {
    /** a-centralized-mirror configuration */
    acm: {
        /** The endpoint URL of a-centralized-mirror */
        endpoint: String(process.env.ACM_ENDPOINT),
        /** The API token */
        apiToken: String(process.env.ACM_API_TOKEN),
        /** The bot token */
        botToken: String(process.env.ACM_BOT_TOKEN),
    },
    /** App configuration */
    app: {
        /** The full URL to the web endpoint */
        webUrl: String(process.env.WEB_URL),
        /** The port to listen on for web requests */
        webPort: Number(process.env.WEB_PORT),
        /** The full URL to the cdn endpoint */
        cdnUrl: String(process.env.CDN_URL),
        /** The port to listen on for CDN requests */
        cdnPort: Number(process.env.CDN_PORT),
        /** The full URL to the api endpoint */
        apiUrl: String(process.env.API_URL),
        /** The port to listen on for api requests */
        apiPort: Number(process.env.API_PORT),
        /** The base domain */
        baseDomain: String(process.env.BASE_DOMAIN),
        /** The environment the app is running in */
        environment: String(process.env.ENVIRONMENT),
    },
    /** Authentication configuration */
    auth: {
        /** The token used to authenticate private API requests */
        token: String(process.env.AUTH_TOKEN),
    },
    /** Database configuration */
    database: {
        location: String(process.env.DATABASE_LOCATION),
    },
    /** ffmpeg configuration */
    ffmpeg: {
        /** Full path to the ffmpeg binary location (i.e. /usr/local/bin/ffmpeg) */
        location: String(process.env.FFMPEG_LOCATION),
    },
    /** Storage configuration */
    file: {
        /** The file storage mode */
        storeMode: String(process.env.FILE_STORE_MODE),
        /** The processing directory for temporary files */
        processingDir: String(process.env.PROCESSING_DIR),
        /** Local file storage mode configuration */
        local: {
            /** The local directory to store files in */
            storageDir: String(process.env.LOCAL_STORAGE_DIR),
        },
    },
    /** Logging configuration */
    logger: {
        /** Elastic Search configuration */
        elasticSearch: {
            /**
             * The name of the index to use when logging to elastic search
             *
             * @example tuckbot-util
             */
            index: String(process.env.LOGGER_ELASTICSEARCH_INDEX),
            /**
             * The full address to the elastic search instance
             *
             * @example http://172.20.1.45:9200
             */
            node: String(process.env.LOGGER_ELASTICSEARCH_NODE),
        },
        /**
         * The level of detail at which to log events
         *
         * @example "debug"
         */
        level: String(process.env.LOGGER_LEVEL || "debug"),
    },
    /** Reddit configuration */
    reddit: {
        /** The client ID of the application */
        clientID: String(process.env.REDDIT_CLIENT_ID),
        /** The client secret of the application */
        clientSecret: String(process.env.REDDIT_CLIENT_SECRET),
        /** The username of the reddit account (bot account) */
        username: String(process.env.REDDIT_USERNAME),
        /** The password of the reddit account (bot account) */
        password: String(process.env.REDDIT_PASSWORD),
        /** The unique user agent to use with the reddit API */
        userAgent: String(process.env.REDDIT_USER_AGENT),
        /** An array of subreddits to scan and mirror content in */
        scanSubsList: String(process.env.REDDIT_SCAN_SUBS).split(","),
    },
    /** Storage configuration */
    storage: {
        /** S3-compatible storage configuration */
        s3: {
            /** The endpoint URL to use */
            endpoint: String(process.env.STORAGE_S3_ENDPOINT),
            /** The access key ID for the endpoint */
            accessKeyId: String(process.env.STORAGE_S3_ACCESS_KEY_ID),
            /** The secret access key for the endpoint */
            secretAccessKey: String(process.env.STORAGE_S3_SECRET_ACCESS_KEY),
            /** The name of the bucket to store files in */
            bucket: String(process.env.STORAGE_S3_BUCKET),
        },
    },
    /** Tuckbot configuration */
    tuckbot: {
        /** Configuration specific to the API project */
        api: {
            /** The full URL of the API, including protocol but WITHOUT trailing slash (i.e. https://api.tuckbot.tv) */
            url: String(process.env.TUCKBOT_API_URL),
            /** The token used to authenticate private API requests */
            token: String(process.env.TUCKBOT_API_TOKEN),
        },
        /** Configuration specific to the frontend project */
        frontend: {
            /** The full URL of the frontend CDN, including protocol but WITHOUT trailing slash (i.e. https://cdn.tuckbot.tv) */
            cdnUrl: String(process.env.TUCKBOT_FRONTEND_CDNURL),
            /** The full URL of the frontend, including protocol but WITHOUT trailing slash (i.e. https://tuckbot.tv) */
            url: String(process.env.TUCKBOT_FRONTEND_URL),
        },
    },
};
//# sourceMappingURL=configurator.js.map