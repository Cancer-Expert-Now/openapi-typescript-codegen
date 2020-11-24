/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Phone Record
 */
export type PhoneRecordItem = {
    /**
     * Record Unique ID
     */
    id?: number;
    /**
     * User ID
     */
    userId?: number;
    /**
     * Phone Number
     */
    phone?: string;
    /**
     * Office Number
     */
    office?: string;
    /**
     * Mobile Number
     */
    mobile?: string;
    /**
     * Fax Number
     */
    fax?: string;
    /**
     * Preferred Contact
     */
    preferredContact?: PhoneRecordItem.preferredContact;
    /**
     * Unix Timestamp
     */
    created?: number;
    /**
     * Unix Timestamp
     */
    updated?: number;
    /**
     * Flag to allow SMS Communication
     */
    smsOk?: boolean;
    /**
     * SMS Verified
     */
    smsVerified?: string;
    /**
     * SMS Pin
     */
    smsPin?: string;
    /**
     * API Response Version
     */
    _ver?: number;
}

export namespace PhoneRecordItem {

    /**
     * Preferred Contact
     */
    export enum preferredContact {
        HOME = 'home',
        MOBILE = 'mobile',
        OFFICE = 'office',
    }


}
