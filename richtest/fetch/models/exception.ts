/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Exception Object
 */
export type exception = {
    message?: string;
    errorKey?: string;
    exception?: Array<{
        type?: string,
        code?: number,
        message?: string,
        /**
         * What file threw this exception
         */
        file?: string,
        /**
         * What line of the file threw this exception
         */
        line?: number,
    }>;
}
