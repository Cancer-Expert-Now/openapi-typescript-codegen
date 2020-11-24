/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * User Address
 */
export type AddressRecordItem = {
    /**
     * Record Unique ID
     */
    id?: number;
    /**
     * Unix Timestamp
     */
    created?: number;
    /**
     * Unix Timestamp
     */
    updated?: number;
    /**
     * Address 1
     */
    address?: string;
    /**
     * Address Line 2
     */
    address2?: string;
    /**
     * City
     */
    city?: string;
    /**
     * State
     */
    state?: string;
    /**
     * Postal Code
     */
    zip?: string;
    /**
     * Country
     */
    country?: string;
    /**
     * Country Code
     */
    country_code?: string;
    /**
     * API Response Version
     */
    _ver?: number;
}
