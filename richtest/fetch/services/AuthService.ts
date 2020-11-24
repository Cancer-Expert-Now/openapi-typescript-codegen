/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Login } from '../models/Login';
import type { UserPartialItem } from '../models/UserPartialItem';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * User Logout
     * Logs out current logged in user session
     * @result any Successful Operation - No Content
     * @throws ApiError
     */
    public static async logout(): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/auth/logout`,
            errors: {
                403: `Error: Forbidden`,
            },
        });
        return result.body;
    }

    /**
     * User Login
     * Logs user into the system
     * @param requestBody Web Login
     * @param authorization
     * @result any successful operation
     * @throws ApiError
     */
    public static async webLogin(
        requestBody: Login,
        authorization?: string,
    ): Promise<{
        /**
         * Session token
         */
        token?: string,
        user?: UserPartialItem,
    }> {
        const result = await __request({
            method: 'POST',
            path: `/auth/webLogin`,
            headers: {
                'Authorization': authorization,
            },
            body: requestBody,
            errors: {
                400: `Authentication error response`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

}