/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiagnosisGroupRecordItem } from './DiagnosisGroupRecordItem';
import type { DiagnosisRecordItem } from './DiagnosisRecordItem';

export type DiagnosisGroupItem = (DiagnosisGroupRecordItem & {
    /**
     * Diagnosis
     */
    diagnosis?: {
        data?: Array<DiagnosisRecordItem>,
    },
});