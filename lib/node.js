'use strict';

/*
    Responsible for storing node attributes
*/
module.exports = function(legiond) {
    const gatekeeper = (data, fn) => {
        return fn(true);
    };

    return {
        attributes: {},
        gatekeeper: legiond.options.gatekeeper || gatekeeper
    };
};
