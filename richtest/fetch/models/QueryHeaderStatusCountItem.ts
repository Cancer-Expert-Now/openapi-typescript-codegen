/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Query Header Status Count Item
 */
export type QueryHeaderStatusCountItem = {
    /**
     * API Response Version
     */
    _ver?: number;
    /**
     * Query Status
     */
    status?: QueryHeaderStatusCountItem.status;
    /**
     * Record count for status
     */
    count?: number;
}

export namespace QueryHeaderStatusCountItem {

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


}
