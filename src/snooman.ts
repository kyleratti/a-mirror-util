import snoowrap from 'snoowrap';

import configurator from './configurator';

export default class {
    /**
     * Generates a snoowrap object
     * @returns A snoowrap object
     */
    static wrap(): snoowrap {
        let wrap = new snoowrap({
            userAgent: configurator.reddit.userAgent,
            clientId: configurator.reddit.clientID,
            clientSecret: configurator.reddit.clientSecret,
            username: configurator.reddit.username,
            password: configurator.reddit.password,
        });

        wrap.config({
            continueAfterRatelimitError: false // we will handle our own replies
        });
        
        return wrap;
    }
}
