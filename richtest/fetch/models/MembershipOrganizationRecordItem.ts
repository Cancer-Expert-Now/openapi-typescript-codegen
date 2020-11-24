/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Memebership Orgaization
 */
export type MembershipOrganizationRecordItem = {
    /**
     * Record Unique ID
     */
    id?: number;
    /**
     * Organization name
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
     * notes
     */
    notes?: string;
    /**
     * contact name
     */
    contactName?: string;
    /**
     * Email Address
     */
    contactEmail?: string;
    /**
     * Phone Number
     */
    contactPhone?: string;
    /**
     * Url
     */
    logoUrl?: string;
    /**
     * Url
     */
    partnerUrl?: string;
    /**
     * API Response Version
     */
    _ver?: number;
}
