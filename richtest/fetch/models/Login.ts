/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Login form
 */
export type Login = {
    /**
     * Username
     */
    username: string;
    /**
     * User password
     */
    password: string;
    /**
     * Web clients should provide a dummy value
     */
    deviceId: string;
    deviceToken?: string;
}
