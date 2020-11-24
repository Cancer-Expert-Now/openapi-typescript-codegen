/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Query Header PartialItem
 */
export type QueryHeaderPartialItem = {
    /**
     * API Response Version
     */
    _ver?: number;
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
     * Query Header Text
     */
    text?: string;
    /**
     * User ID
     */
    userId?: number;
    /**
     * Diagnosis ID
     */
    diagnosisId?: number;
    /**
     * Query Status
     */
    status?: QueryHeaderPartialItem.status;
    /**
     * Media Type of Query
     */
    mediaType?: QueryHeaderPartialItem.mediaType;
}

export namespace QueryHeaderPartialItem {

    /**
     * Query Status
     */
    export enum status {
        OPEN = 'open',
        CLOSED = 'closed',
        ANSWERED = 'answered',
        HELD = 'held',
        PENDING_CHARGE = 'pending_charge',
        CHARGED = 'charged',
        CREATE = 'create',
        CSRHOLD = 'csrhold',
        CANCELLED = 'cancelled',
        PENDING_SURVEY = 'pending_survey',
    }

    /**
     * Media Type of Query
     */
    export enum mediaType {
        MESSENGER = 'messenger',
        AUDIO = 'audio',
        VIDEO = 'video',
    }


}
