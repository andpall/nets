class ValidationError extends Error {
    constructor(...args) {
        super(...args)
    }
}

class TokenError extends Error {
    constructor(...args) {
        super(...args)
    }
}

module.exports = {
    ValidationError,
    TokenError
}
