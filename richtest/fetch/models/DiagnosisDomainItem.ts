/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiagnosisDomainRecordItem } from './DiagnosisDomainRecordItem';
import type { DiagnosisGroupItem } from './DiagnosisGroupItem';

export type DiagnosisDomainItem = (DiagnosisDomainRecordItem & {
    /**
     * Diagnosis Group
     */
    diagnosisGroup?: {
        data?: Array<DiagnosisGroupItem>,
    },
});