/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiagnosisRecordItem } from './DiagnosisRecordItem';
import type { PoolRecordItem } from './PoolRecordItem';
import type { UserPartialItem } from './UserPartialItem';

export type PoolItem = (PoolRecordItem & {
    /**
     * Expert List
     */
    userList?: {
        data?: Array<UserPartialItem>,
    },
    /**
     * Diagnosis
     */
    diagnosis?: {
        data?: Array<DiagnosisRecordItem>,
    },
});