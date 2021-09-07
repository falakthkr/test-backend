const config = {
    production: {
        DATABASE: process.env.ATLAS_URI
    },
    default: {
        DATABASE: process.env.ATLAS_URI
    }
}

exports.get = function get(env) {
    return config[env] || config.default
}