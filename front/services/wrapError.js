export default function(error) {
    if (typeof error === 'string') {
        return {
            message: error
        };
    }
    if (error.hasOwnProperty(error)) {
        return error.error;
    }
    return error;
}
