const RequestErrorCodes = {
    401: "AUTH_ERR",
    403: "FORBIDDEN_ERR",
    404: "NOT_FOUND",
    400: "BAD_REQUEST",
    412: "CONFIG_ERROR",
};

class LoopRequestError extends Error {
    constructor(message, httpErrorCode, cause = null) {
        super(message);
        this.name = this.constructor.name;
        this.requestErrorCode =
            RequestErrorCodes[httpErrorCode] || "INTERNAL_ERR";
        this.cause = cause;
    }
}

module.exports = {
    LoopRequestError: LoopRequestError,
};
