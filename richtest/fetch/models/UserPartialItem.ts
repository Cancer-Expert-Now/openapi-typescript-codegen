/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * User Partial
 */
export type UserPartialItem = {
    /**
     * API Response Version
     */
    _ver?: number;
    /**
     * Record Unique ID
     */
    id?: number;
    /**
     * User first name
     */
    firstName?: string;
    /**
     * User last name
     */
    lastName?: string;
    /**
     * User display name
     */
    displayName?: string;
    /**
     * User login
     */
    userName?: string;
    /**
     * User login
     */
    timeZone?: string;
    /**
     * Email Address
     */
    email?: string;
    /**
     * User Type ID
     */
    userType?: number;
    /**
     * User Type Display
     */
    typeDisplay?: string;
    /**
     * User degrees
     */
    degrees?: string;
    /**
     * User's preferred language ID
     */
    languageId?: string;
    /**
     * User's free level
     */
    freeLevel?: UserPartialItem.freeLevel;
}

export namespace UserPartialItem {

    /**
     * User's free level
     */
    export enum freeLevel {
        NONE = 'none',
        ASYNC = 'async',
        TELE = 'tele',
    }


}
