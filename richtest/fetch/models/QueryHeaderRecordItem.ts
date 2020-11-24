/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { QueryHeaderPartialItem } from './QueryHeaderPartialItem';

export type QueryHeaderRecordItem = (QueryHeaderPartialItem & {
    /**
     * API Response Version
     */
    _ver?: number,
    /**
     * Unix Timestamp
     */
    holdTime?: number,
    /**
     * Unix Timestamp
     */
    lastChange?: number,
    /**
     * Unix Timestamp
     */
    inviteTime?: number,
    /**
     * Unix Timestamp
     */
    meetingTime?: number,
    /**
     * Unix Timestamp
     */
    contextSet?: number,
    dob?: string,
    /**
     * Flag for Used Defaults
     */
    usedDefaults?: boolean,
    /**
     * Flag for Prevent Invites
     */
    preventInvites?: boolean,
    /**
     * Flag for translated
     */
    translated?: boolean,
    /**
     * Flag for exported to RC
     */
    exportedToRc?: boolean,
    /**
     * Flag for US Only
     */
    usOnly?: boolean,
    /**
     * Age Unit
     */
    ageUnit?: 'day' | 'week' | 'month' | 'year',
    /**
     * Expert Selection Mode
     */
    expertSelectionMode?: 'grant_first' | 'plan_first' | 'all' | 'user_choice' | 'plan_only' | 'grant_only' | 'plan_select',
    /**
     * Filter State
     */
    filterState?: 'no_filters' | 'applied' | 'removed',
    /**
     * type
     */
    type?: 'normal' | 'blinded' | 'communal' | 'private',
    /**
     * gender
     */
    gender?: 'unspecified' | 'female' | 'male' | 'transmale' | 'transfemale' | 'pretransmale' | 'pretransfemale' | 'indeterminate',
    /**
     * expert Id
     */
    expertId?: number,
    /**
     * Plan Id
     */
    planId?: number,
    /**
     * Grant Id
     */
    grantId?: number,
    /**
     * meeting Host Id
     */
    meetingHost?: number,
    /**
     * Pool Id
     */
    poolId?: number,
    /**
     * reference Case Id
     */
    referenceCase?: number,
    /**
     * Created by User ID
     */
    uidCreated?: number,
    /**
     * Context Set by User ID
     */
    contextSetBy?: number,
    /**
     * source Case Id
     */
    sourceCaseId?: number,
    /**
     * asker Context Id
     */
    askerContext?: number,
    /**
     * Grant Region Id
     */
    gprId?: number,
    /**
     * Tags (Query Context)
     */
    tags?: string,
    /**
     * Query Type
     */
    queryType?: string,
    /**
     * Meeting Id - Must be Unique
     */
    meetingId?: string,
    /**
     * Zoom Id
     */
    zoomId?: string,
    /**
     * expert Selection State
     */
    expertSelectionState?: string,
    /**
     * original Language
     */
    originalLang?: string,
    /**
     * CSR PIN
     */
    csrPin?: string,
    /**
     * Meeting Recording Sid
     */
    meetingRecordingSid?: string,
    /**
     * Pool Name
     */
    poolName?: string,
    /**
     * DOS ID
     */
    dosId?: number,
    /**
     * Rating
     */
    rating?: number,
    /**
     * Age Magnitude
     */
    ageMagnitude?: number,
    /**
     * Max Experts
     */
    maxExperts?: number,
    /**
     * Max Experts
     */
    meetingReminderCount?: number,
    /**
     * meeting Recording Tries
     */
    meetingRecordingTries?: number,
    /**
     * current Tier
     */
    currentTier?: number,
    /**
     * reminder Count
     */
    reminderCount?: number,
    /**
     * Query Header Text
     */
    text?: string,
    /**
     * History
     */
    history?: string,
    /**
     * Comments
     */
    comment?: string,
    /**
     * Options
     */
    options?: string,
});