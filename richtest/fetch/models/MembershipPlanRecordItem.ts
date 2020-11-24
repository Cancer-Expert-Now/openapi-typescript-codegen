/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MembershipPlanPartialItem } from './MembershipPlanPartialItem';

export type MembershipPlanRecordItem = (MembershipPlanPartialItem & {
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
    dateStart?: number,
    /**
     * Unix Timestamp
     */
    dateEnd?: number,
    /**
     * Flag to use plan date range
     */
    useDate?: boolean,
    /**
     * Flag to consume units.  Potential for deprecation
     */
    useConsumed?: boolean,
    /**
     * Flag to use individual eligibility date from census
     */
    useIndDate?: boolean,
    /**
     * Flag to use SSN for census matching
     */
    useSsn?: boolean,
    /**
     * Flag to use email for census matching
     */
    useEmail?: boolean,
    /**
     * Flag to use address for census matching
     */
    useAddress?: boolean,
    /**
     * Flag to use employee id for census matching
     */
    useEmployeeId?: boolean,
    /**
     * Flag to allow members of plan can see each others queries
     */
    sharedQueries?: boolean,
    /**
     * Flag to restrict members to read only for queries in this plan, not create
     */
    readOnly?: boolean,
    /**
     * Flag for plan to be eligible to match by region
     */
    matchRegion?: boolean,
    /**
     * Flag for blank field allowed
     */
    customBlank1?: boolean,
    /**
     * Flag for blank field allowed
     */
    customBlank2?: boolean,
    /**
     * Flag for blank field allowed
     */
    customBlank3?: boolean,
    /**
     * Type of user this plan applies to
     */
    userType?: number,
    /**
     * Override for corresponding grant value. Usually null
     */
    maxExperts?: number,
    /**
     * Override for corresponding grant value
     */
    maxTimeToRespondMinutes?: number,
    /**
     * Override for corresponding grant value
     */
    maxDurationMinutes?: number,
    /**
     * Override for corresponding grant value
     */
    firstReminderTime?: number,
    /**
     * Override for corresponding grant value
     */
    secondReminderTime?: number,
    /**
     * When multiple plans meet matching criteria for a query, choose the one with the lowest priority value
     */
    priority?: number,
    /**
     * Minimum timeslots for a live session request
     */
    minRequestedTimes?: number,
    /**
     * Maximum timeslots for a live session request
     */
    maxRequestedTimes?: number,
    /**
     * Weight that may be applied to pools associated with this plan (but not those inherited from the grant)
     */
    localPoolWeight?: number,
    /**
     * Member Organization ID
     */
    moId?: number,
    /**
     * Unique plan alias (required - basis for link referece)
     */
    alias: string,
    /**
     * Type of plan
     */
    type?: 'census' | 'sso' | 'region' | 'advocate' | 'blinded' | 'expert',
    /**
     * Single signon key (one plan - no new ones will be created)
     */
    ssoKey?: string,
    /**
     * Single signon return url
     */
    ssoReturnUrl?: string,
    /**
     * Name of employee id
     */
    empidName?: string,
    /**
     * Custom HTML displayed for members when they log in
     */
    memberMessage?: string,
    /**
     * Custom matching field for census types. Entries are valiadated as blank if allowed, or matching the corresponding regex
     */
    customField1?: string,
    /**
     * Custom matching field for census types. Entries are valiadated as blank if allowed, or matching the corresponding regex
     */
    customField2?: string,
    /**
     * Custom matching field for census types. Entries are valiadated as blank if allowed, or matching the corresponding regex
     */
    customField3?: string,
    /**
     * Serialized array of fields mapped to corresponding input data
     */
    uploadMap?: string,
    /**
     * Matching regex
     */
    customRegex1?: string,
    /**
     * Matching regex
     */
    customRegex2?: string,
    /**
     * Matching regex
     */
    customRegex3?: string,
    /**
     * Name of census matching strategy. Corresponds to class {strategy}PreProcessor.php
     */
    strategy?: string,
    /**
     * JSON encoded stragegy options for the stragegy class for census type. For region types this is a comma separated list of country codes for the registration page
     */
    strategyOptions?: string,
    /**
     * Partner landing page for referred members, mainly SSO but may also be used for members
     */
    landingPage?: string,
    /**
     * Customer service telephone for the case where a member cannot create an account. Mainly SSO but may refer to Member as well
     */
    custSvcTel?: string,
    /**
     * Customer service email for the case where a member cannot create an account. Mainly SSO but may refer to Member as well
     */
    custSvcEmail?: string,
    /**
     * Additional HTML displayed on registration pages
     */
    regPageText?: string,
    /**
     * Legacy sponsor data - largely replaced by grant shortDescription. Only displayed when there is no associated grant program
     */
    sponsorHtml?: string,
    /**
     * Determines the display theme for the plan. Default if null
     */
    theme?: string,
    /**
     * Name of partner company
     */
    partnerName?: string,
    /**
     * Name of representative in partner company
     */
    managerName?: string,
    /**
     * List of feed urls for this plan which override the diagnosis domain feeds.
     */
    feeds?: string,
    /**
     * How experts are selected for this plan
     */
    expertSelectionMode?: 'grant_first' | 'plan_first' | 'all' | 'user_choice' | 'plan_only' | 'grant_only' | 'plan_select',
    /**
     * Behavior for plan expiration
     */
    expirationBehavior?: 'noaccess' | 'readonly' | 'readonly_hideask',
});