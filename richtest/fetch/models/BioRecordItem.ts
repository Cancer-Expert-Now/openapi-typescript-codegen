/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * User Bio
 */
export type BioRecordItem = {
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
     * User bio
     */
    bio?: string;
    /**
     * Short Bio
     */
    shortBio?: string;
    /**
     * Location
     */
    location?: string;
    /**
     * affiliations
     */
    affiliations?: string;
    /**
     * Active Flag
     */
    active?: boolean;
    /**
     * Disclosures
     */
    disclosures?: string;
    /**
     * API Response Version
     */
    _ver?: number;
}
