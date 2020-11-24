/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Diagnosis Domain Record
 */
export type DiagnosisDomainRecordItem = {
    /**
     * Record Unique ID
     */
    id?: number;
    /**
     * Diagnosis domain name
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
     * List of URIs for Feeds
     */
    defaultFeeds?: string;
    /**
     * Flag to hide domain
     */
    hidden?: boolean;
    /**
     * API Response Version
     */
    _ver?: number;
}
