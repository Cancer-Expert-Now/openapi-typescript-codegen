/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Membership Census
 */
export type MembershipCensusRecordItem = {
    /**
     * API Response Version
     */
    _ver?: number;
    /**
     * Record Unique ID
     */
    id?: number;
    /**
     * Membership Plan Unique ID
     */
    membershipPlanId?: number;
    /**
     * Record Unique ID
     */
    ownerMcId?: number;
    /**
     * Record Unique ID
     */
    uidCreated?: number;
    /**
     * Record Unique ID
     */
    userId?: number;
    /**
     * Unix Timestamp
     */
    created?: number;
    /**
     * Unix Timestamp
     */
    updated?: number;
    /**
     * Unix Timestamp
     */
    eligibleFrom?: number;
    /**
     * Unix Timestamp
     */
    eligibleTo?: number;
    dob?: string;
    /**
     * Flag for record being active
     */
    active?: boolean;
    /**
     * Flag for census account origin
     */
    accountOrigin?: boolean;
    /**
     * Flag for Minor
     */
    isMinor?: boolean;
    /**
     * First Name
     */
    firstName?: string;
    /**
     * Middle Name
     */
    middleName?: string;
    /**
     * Last Name
     */
    lastName?: string;
    /**
     * Email Address
     */
    email?: string;
    /**
     * Relation to user
     */
    relation?: MembershipCensusRecordItem.relation;
    orgId1?: string;
    orgId2?: string;
    /**
     * Guarantor first name
     */
    guarFirst?: string;
    /**
     * Guarantor last name
     */
    guarLast?: string;
    internalId?: string;
    /**
     * Zip code
     */
    zip?: string;
    /**
     * SSN
     */
    ssn?: string;
}

export namespace MembershipCensusRecordItem {

    /**
     * Relation to user
     */
    export enum relation {
        SELF = 'self',
        SPOUSE = 'spouse',
        CHILD = 'child',
        OTHER = 'other',
    }


}
