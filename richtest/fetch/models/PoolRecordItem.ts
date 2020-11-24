/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Pool
 */
export type PoolRecordItem = {
    /**
     * Record Unique ID
     */
    id?: number;
    /**
     * Pool name
     */
    name?: string;
    /**
     * Unix Timestamp
     */
    created?: number;
    /**
     * Unix Timestamp
     */
    updated?: number;
    /**
     * Flag for record being active
     */
    active?: boolean;
    /**
     * Is Default Pool
     */
    default?: boolean;
    /**
     * Pool display name
     */
    displayName?: string;
    /**
     * Pool description
     */
    description?: string;
    /**
     * API Response Version
     */
    _ver?: number;
}
