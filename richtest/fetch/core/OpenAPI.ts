/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */


import { Response as ResponseImplementation } from 'node-fetch';

type Resolver<T> = () => Promise<T>;
type Headers = Record<string, string>;

import { ApiResult } from './ApiResult';
import { ApiRequestOptions } from './ApiRequestOptions';

export interface RequestHookParams {
    url: string;
    options: ApiRequestOptions;
}

export interface ResponseHookParams {
    url: string;
    result: ApiResult;
    response?: ResponseImplementation;
}

type Config = {
    BASE: string;
    VERSION: string;
    WITH_CREDENTIALS: boolean;
    REQUEST_HOOK?(params: RequestHookParams): Promise<RequestHookParams>;
    RESPONSE_HOOK?(result: ResponseHookParams): Promise<ApiResult>
    TOKEN?: string | Resolver<string>;
    USERNAME?: string | Resolver<string>;
    PASSWORD?: string | Resolver<string>;
    HEADERS?: Headers | Resolver<Headers>;
}

export const OpenAPI: Config = {
    BASE: 'http://localhost:8081',
    VERSION: '0.1',
    WITH_CREDENTIALS: false,
    TOKEN: undefined,
    USERNAME: undefined,
    PASSWORD: undefined,
    HEADERS: undefined,
};