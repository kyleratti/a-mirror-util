import dotenv from "dotenv";

dotenv.config();

/**
 * Retrieve a string value of the specified environment variable, or null if it isn't set
 * @param varName The name of the environment variable to read from `process.env`
 * @example stringOrNull("WEB_URL")
 */
const stringOrNull = (varName: string) =>
  process.env[varName] ? String(process.env[varName]) : null;

/**
 * Retrieve a number value of the specified environment variable, or null if it isn't set
 * @param varName The name of the environment variable to read from `process.env`
 * @example numberOrNull("WEB_PORT")
 */
const numberOrNull = (varName: string) =>
  process.env[varName] ? Number(process.env[varName]) : null;

export default {
  /** a-centralized-mirror configuration */
  acm: {
    /** The endpoint URL of a-centralized-mirror */
    endpoint: stringOrNull(process.env.ACM_ENDPOINT),
    /** The API token */
    apiToken: stringOrNull(process.env.ACM_API_TOKEN),
    /** The bot token */
    botToken: stringOrNull(process.env.ACM_BOT_TOKEN),
  },

  /** App configuration */
  app: {
    /** The full URL to the web endpoint */
    webUrl: stringOrNull(process.env.WEB_URL),
    /** The port to listen on for web requests */
    webPort: numberOrNull(process.env.WEB_PORT),

    /** The full URL to the cdn endpoint */
    cdnUrl: stringOrNull(process.env.CDN_URL),
    /** The port to listen on for CDN requests */
    cdnPort: numberOrNull(process.env.CDN_PORT),

    /** The full URL to the api endpoint */
    apiUrl: stringOrNull(process.env.API_URL),
    /** The port to listen on for api requests */
    apiPort: numberOrNull(process.env.API_PORT),

    /** The base domain */
    baseDomain: stringOrNull(process.env.BASE_DOMAIN),

    /** The environment the app is running in */
    environment: stringOrNull(process.env.ENVIRONMENT),
  },

  /** Authentication configuration */
  auth: {
    /** The token used to authenticate private API requests */
    token: stringOrNull(process.env.AUTH_TOKEN),
  },

  /** Database configuration */
  database: {
    location: stringOrNull(process.env.DATABASE_LOCATION),
  },

  /** ffmpeg configuration */
  ffmpeg: {
    /** Full path to the ffmpeg binary location (i.e. /usr/local/bin/ffmpeg) */
    location: stringOrNull(process.env.FFMPEG_LOCATION),
  },

  /** Storage configuration */
  file: {
    /** The file storage mode */
    storeMode: stringOrNull(process.env.FILE_STORE_MODE),

    /** The processing directory for temporary files */
    processingDir: stringOrNull(process.env.PROCESSING_DIR),

    /** Local file storage mode configuration */
    local: {
      /** The local directory to store files in */
      storageDir: stringOrNull(process.env.LOCAL_STORAGE_DIR),
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
      index: stringOrNull(process.env.LOGGER_ELASTICSEARCH_INDEX),

      /**
       * The full address to the elastic search instance
       *
       * @example http://172.20.1.45:9200
       */
      node: stringOrNull(process.env.LOGGER_ELASTICSEARCH_NODE),
    },

    /**
     * The level of detail at which to log events
     *
     * @example "debug"
     */
    level: stringOrNull(process.env.LOGGER_LEVEL || "debug"),
  },

  /** Reddit configuration */
  reddit: {
    /** The client ID of the application */
    clientID: stringOrNull(process.env.REDDIT_CLIENT_ID),
    /** The client secret of the application */
    clientSecret: stringOrNull(process.env.REDDIT_CLIENT_SECRET),
    /** The username of the reddit account (bot account) */
    username: stringOrNull(process.env.REDDIT_USERNAME),
    /** The password of the reddit account (bot account) */
    password: stringOrNull(process.env.REDDIT_PASSWORD),
    /** The unique user agent to use with the reddit API */
    userAgent: stringOrNull(process.env.REDDIT_USER_AGENT),
    /** An array of subreddits to scan and mirror content in */
    scanSubsList: stringOrNull(process.env.REDDIT_SCAN_SUBS)?.split(","),
  },

  /** Storage configuration */
  storage: {
    /** S3-compatible storage configuration */
    s3: {
      /** The endpoint URL to use */
      endpoint: stringOrNull(process.env.STORAGE_S3_ENDPOINT),
      /** The access key ID for the endpoint */
      accessKeyId: stringOrNull(process.env.STORAGE_S3_ACCESS_KEY_ID),
      /** The secret access key for the endpoint */
      secretAccessKey: stringOrNull(process.env.STORAGE_S3_SECRET_ACCESS_KEY),
      /** The name of the bucket to store files in */
      bucket: stringOrNull(process.env.STORAGE_S3_BUCKET),
    },
  },

  /** Tuckbot configuration */
  tuckbot: {
    /** Configuration specific to the API project */
    api: {
      /** The full URL of the API, including protocol but WITHOUT trailing slash (i.e. https://api.tuckbot.tv) */
      url: stringOrNull(process.env.TUCKBOT_API_URL),
      /** The token used to authenticate private API requests */
      token: stringOrNull(process.env.TUCKBOT_API_TOKEN),
    },
    /** Configuration specific to the frontend project */
    frontend: {
      /** The full URL of the frontend CDN, including protocol but WITHOUT trailing slash (i.e. https://cdn.tuckbot.tv) */
      cdnUrl: stringOrNull(process.env.TUCKBOT_FRONTEND_CDNURL),
      /** The full URL of the frontend, including protocol but WITHOUT trailing slash (i.e. https://tuckbot.tv) */
      url: stringOrNull(process.env.TUCKBOT_FRONTEND_URL),
    },
  },
};
