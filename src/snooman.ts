import snoowrap from 'snoowrap';

import configurator from './configurator';

/**
 * Generates a snoowrap object
 * @returns A snoowrap object
 */
export default function wrap(): snoowrap {
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
