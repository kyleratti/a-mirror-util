import * as dotenv from "dotenv";

dotenv.load();

export default {
  /** a-centralized-mirror configuration */
  acm: {
    /** The endpoint URL of a-centralized-mirror */
    endpoint: String(process.env.ACM_ENDPOINT),
    /** The API token */
    apiToken: String(process.env.ACM_API_TOKEN),
    /** The bot token */
    botToken: String(process.env.ACM_BOT_TOKEN)
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
    environment: String(process.env.ENVIRONMENT)
  },

  /** Authentication configuration */
  auth: {
    /** The token used to authenticate private API requests */
    token: String(process.env.AUTH_TOKEN)
  },

  /** Database configuration */
  database: {
    location: String(process.env.DATABASE_LOCATION)
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
      storageDir: String(process.env.LOCAL_STORAGE_DIR)
    }
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
    scanSubsList: String(process.env.REDDIT_SCAN_SUBS).split(",")
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
      bucket: String(process.env.STORAGE_S3_BUCKET)
    }
  },

  /** Tuckbot configuration */
  tuckbot: {
    /** Configuration specific to the API project */
    api: {
      /** The full URL of the API, including protocol but WITHOUT trailing slash (i.e. https://api.tuckbot.tv) */
      url: String(process.env.TUCKBOT_API_URL),
      /** The token used to authenticate private API requests */
      token: String(process.env.TUCKBOT_API_TOKEN)
    },
    /** Configuration specific to the frontend project */
    frontend: {
      /** The full URL of the frontend CDN, including protocol but WITHOUT trailing slash (i.e. https://cdn.tuckbot.tv) */
      cdnUrl: String(process.env.TUCKBOT_FRONTEND_CDNURL),
      /** The full URL of the frontend, including protocol but WITHOUT trailing slash (i.e. https://tuckbot.tv) */
      url: String(process.env.TUCKBOT_FRONTEND_URL)
    }
  }
};
