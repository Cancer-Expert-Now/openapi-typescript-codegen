/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GrantPartialItem } from './GrantPartialItem';

export type GrantRecordItem = (GrantPartialItem & {
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
    effectiveFrom?: number,
    /**
     * Unix Timestamp
     */
    effectiveTo?: number,
    /**
     * Media Text
     */
    mediaText?: boolean,
    /**
     * Media Audio
     */
    mediaAudio?: boolean,
    /**
     * Media Video
     */
    mediaVideo?: boolean,
    /**
     * Anon User
     */
    anonUser?: boolean,
    /**
     * Anon Expert
     */
    anonExpert?: boolean,
    /**
     * Case Based
     */
    caseBased?: boolean,
    /**
     * Skip Case Ok
     */
    skipCaseOk?: boolean,
    /**
     * Text Attachments
     */
    textAttachments?: boolean,
    /**
     * Audio Attachments
     */
    audioAttachments?: boolean,
    /**
     * Video Attachments
     */
    videoAttachments?: boolean,
    /**
     * Disclosure Required
     */
    disclosureRequired?: boolean,
    /**
     * Allow Plan Pools
     */
    allowPlanPools?: boolean,
    /**
     * Allow Weighting
     */
    allowWeighting?: boolean,
    /**
     * Allow Selection Mode
     */
    allowSelectionMode?: boolean,
    /**
     * Match Region
     */
    matchRegion?: boolean,
    /**
     * Score Factor
     */
    scoreFactor?: number,
    /**
     * Min Units Per Query
     */
    minUnitsPerQuery?: number,
    /**
     * Min Charge Units
     */
    minChargeUnits?: number,
    /**
     * units Awarded
     */
    unitsAwarded?: number,
    /**
     * Units Text
     */
    unitsText?: number,
    /**
     * Units Audio
     */
    unitsAudio?: number,
    /**
     * Units Video
     */
    unitsVideo?: number,
    /**
     * Priority
     */
    priority?: number,
    /**
     * Minutes Per Unit
     */
    minutesPerUnit?: number,
    /**
     * monthlyUnitAllowance
     */
    monthlyUnitAllowance?: number,
    /**
     * Units Available
     */
    unitsAvailable?: number,
    /**
     * User Type
     */
    userType?: number,
    /**
     * Max Experts
     */
    maxExperts?: number,
    /**
     * maxTimeToRespondMinutes
     */
    maxTimeToRespondMinutes?: number,
    /**
     * maxDurationMinutes
     */
    maxDurationMinutes?: number,
    /**
     * firstReminderTime
     */
    firstReminderTime?: number,
    /**
     * secondReminderTime
     */
    secondReminderTime?: number,
    /**
     * minExperts
     */
    minExperts?: number,
    /**
     * Unit Name
     */
    unitName?: string,
    /**
     * Billing Method
     */
    billingMethod?: 'none' | 'mlScore' | 'respondentCount' | 'queryCount',
    /**
     * Front Matter
     */
    frontMatter?: string,
    /**
     * notes
     */
    notes?: string,
    /**
     * Messenger Config
     */
    messengerConfig?: string,
});