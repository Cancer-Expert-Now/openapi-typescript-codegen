/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserPartialItem } from './UserPartialItem';

export type UserRecordItem = (UserPartialItem & {
    /**
     * API Response Version
     */
    _ver?: number,
    /**
     * Unix Timestamp
     */
    created?: number,
    /**
     * Unix Timestamp
     */
    updated?: number,
    /**
     * Unix Timestamp
     */
    registrationDate?: number,
    /**
     * User Registration IP Address
     */
    registrationIp?: string,
    /**
     * User Registration GEO inforamtion - JSON
     */
    registrationGeo?: string,
    /**
     * User Registration Status
     */
    regStatus?: 'pending' | 'new' | 'verify_sent' | 'verified' | 'welcome_sent' | 'skipped' | 'new_creg' | 'invited' | 'pre_plan_invite',
    /**
     * User Registration Status
     */
    regNotifyStatus?: 'pending' | 'new' | 'sent' | 'skipped',
    /**
     * Unix Timestamp
     */
    lastVisit?: number,
    /**
     * User Login IP Address
     */
    loginIp?: string,
    /**
     * User Login GEO inforamtion - JSON
     */
    loginGeo?: string,
    /**
     * User Activation IP Address
     */
    activationIp?: string,
    /**
     * User Activation GEO inforamtion - JSON
     */
    activationGeo?: string,
    /**
     * User Speciality
     */
    speciality?: 'medonc' | 'surgonc' | 'radonc' | 'path' | 'radiology' | 'other',
    /**
     * User Other Speciality
     */
    otherSpeciality?: string,
    /**
     * Flag for user email confirmed
     */
    emailConfirmed?: boolean,
    /**
     * User referral source
     */
    referralSource?: string,
    /**
     * User other referral source
     */
    otherReferralSource?: string,
});