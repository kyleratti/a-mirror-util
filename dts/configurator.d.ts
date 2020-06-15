declare const _default: {
    /** a-centralized-mirror configuration */
    acm: {
        /** The endpoint URL of a-centralized-mirror */
        endpoint: string;
        /** The API token */
        apiToken: string;
        /** The bot token */
        botToken: string;
    };
    /** App configuration */
    app: {
        /** The full URL to the web endpoint */
        webUrl: string;
        /** The port to listen on for web requests */
        webPort: number;
        /** The full URL to the cdn endpoint */
        cdnUrl: string;
        /** The port to listen on for CDN requests */
        cdnPort: number;
        /** The full URL to the api endpoint */
        apiUrl: string;
        /** The port to listen on for api requests */
        apiPort: number;
        /** The base domain */
        baseDomain: string;
        /** The environment the app is running in */
        environment: string;
    };
    /** Authentication configuration */
    auth: {
        /** The token used to authenticate private API requests */
        token: string;
    };
    /** Database configuration */
    database: {
        location: string;
    };
    /** ffmpeg configuration */
    ffmpeg: {
        /** Full path to the ffmpeg binary location (i.e. /usr/local/bin/ffmpeg) */
        location: string;
    };
    /** Storage configuration */
    file: {
        /** The file storage mode */
        storeMode: string;
        /** The processing directory for temporary files */
        processingDir: string;
        /** Local file storage mode configuration */
        local: {
            /** The local directory to store files in */
            storageDir: string;
        };
    };
    /** Logging configuration */
    logger: {
        /** Elastic Search configuration */
        elasticSearch: {
            /**
             * The name of the index to use when logging to elastic search
             *
             * @example tuckbot-util
             */
            index: string;
            /**
             * The full address to the elastic search instance
             *
             * @example http://172.20.1.45:9200
             */
            node: string;
        };
        /**
         * The level of detail at which to log events
         *
         * @example "debug"
         */
        level: string;
    };
    /** Reddit configuration */
    reddit: {
        /** The client ID of the application */
        clientID: string;
        /** The client secret of the application */
        clientSecret: string;
        /** The username of the reddit account (bot account) */
        username: string;
        /** The password of the reddit account (bot account) */
        password: string;
        /** The unique user agent to use with the reddit API */
        userAgent: string;
        /** An array of subreddits to scan and mirror content in */
        scanSubsList: string[];
    };
    /** Storage configuration */
    storage: {
        /** S3-compatible storage configuration */
        s3: {
            /** The endpoint URL to use */
            endpoint: string;
            /** The access key ID for the endpoint */
            accessKeyId: string;
            /** The secret access key for the endpoint */
            secretAccessKey: string;
            /** The name of the bucket to store files in */
            bucket: string;
        };
    };
    /** Tuckbot configuration */
    tuckbot: {
        /** Configuration specific to the API project */
        api: {
            /** The full URL of the API, including protocol but WITHOUT trailing slash (i.e. https://api.tuckbot.tv) */
            url: string;
            /** The token used to authenticate private API requests */
            token: string;
        };
        /** Configuration specific to the frontend project */
        frontend: {
            /** The full URL of the frontend CDN, including protocol but WITHOUT trailing slash (i.e. https://cdn.tuckbot.tv) */
            cdnUrl: string;
            /** The full URL of the frontend, including protocol but WITHOUT trailing slash (i.e. https://tuckbot.tv) */
            url: string;
        };
    };
};
export default _default;
