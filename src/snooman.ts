import snoowrap from 'snoowrap';

import configurator from './configurator';

export var wrap = (new snoowrap({
    userAgent: configurator.reddit.userAgent,
    clientId: configurator.reddit.clientID,
    clientSecret: configurator.reddit.clientSecret,
    username: configurator.reddit.username,
    password: configurator.reddit.password,
})
    .config({continueAfterRatelimitError: false}));
