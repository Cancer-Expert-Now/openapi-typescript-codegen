/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Diagnosis
 */
export type DiagnosisRecordItem = {
    /**
     * Record Unique ID
     */
    id?: number;
    /**
     * Diagnosis name
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
     * Deleted Flag
     */
    deleted?: boolean;
    /**
     * Record Unique ID
     */
    diagnosisGroupId?: number;
    /**
     * API Response Version
     */
    _ver?: number;
}
