/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DiagnosisDomainItem } from '../models/DiagnosisDomainItem';
import type { DiagnosisDomainRecordItem } from '../models/DiagnosisDomainRecordItem';
import type { DiagnosisGroupItem } from '../models/DiagnosisGroupItem';
import type { DiagnosisGroupRecordItem } from '../models/DiagnosisGroupRecordItem';
import type { DiagnosisRecordItem } from '../models/DiagnosisRecordItem';
import type { meta } from '../models/meta';
import { request as __request } from '../core/request';

export class DiagnosisService {

    /**
     * Find diagnosis by ID
     * Returns a single diagnosis
     * @param id Record ID
     * @result DiagnosisRecordItem successful operation
     * @throws ApiError
     */
    public static async getDiagnosisById(
        id: number,
    ): Promise<DiagnosisRecordItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/diagnosis/${id}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update an existing Diagnosis
     * Update a record based on data given
     * @param id Record ID
     * @param requestBody Diagnosis object to be updated
     * @result DiagnosisRecordItem successful operation
     * @throws ApiError
     */
    public static async updateDiagnosis(
        id: number,
        requestBody: DiagnosisRecordItem,
    ): Promise<DiagnosisRecordItem> {
        const result = await __request({
            method: 'PUT',
            path: `/server/diagnosis/${id}`,
            body: requestBody,
            errors: {
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Find diagnosis domain by ID
     * Returns a single diagnosis domain
     * @param id Record ID
     * @result DiagnosisDomainItem successful operation
     * @throws ApiError
     */
    public static async getDiagnosisDomainById(
        id: number,
    ): Promise<DiagnosisDomainItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/diagnosis/domain/${id}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update an existing Diagnosis Domain
     * Update a record based on data given
     * @param id Record ID
     * @param requestBody Diagnosis object to be updated
     * @result DiagnosisDomainRecordItem successful operation
     * @throws ApiError
     */
    public static async updateDiagnosisDomain(
        id: number,
        requestBody: DiagnosisDomainRecordItem,
    ): Promise<DiagnosisDomainRecordItem> {
        const result = await __request({
            method: 'PUT',
            path: `/server/diagnosis/domain/${id}`,
            body: requestBody,
            errors: {
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Find multiple diagnosis domains.  Filterable by name, grantId, planId.  Only one allowed.
     * Returns one or more matching diagnosis domains
     * @param name Find records searching by Name
     * @param grantId Find records associated with a given Grant
     * @param planId Find records associated with a given Plan
     * @param inclHidden Flag to include hidden domains in result list
     * @param excludeGrantId Exclude records associated with a given Grant
     * @param excludePlanId Exclude records associated with a given Plan
     * @param page Page to begin results at
     * @param pageSize Number of results per page
     * @result any successful operation
     * @throws ApiError
     */
    public static async getDiagnosisDomainList(
        name?: string,
        grantId?: number,
        planId?: number,
        inclHidden: boolean = false,
        excludeGrantId?: number,
        excludePlanId?: number,
        page: number = 1,
        pageSize: number = 10,
    ): Promise<{
        data?: Array<DiagnosisDomainRecordItem>,
        meta?: meta,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/diagnosis/domain/list`,
            query: {
                'name': name,
                'grantId': grantId,
                'planId': planId,
                'inclHidden': inclHidden,
                'excludeGrantId': excludeGrantId,
                'excludePlanId': excludePlanId,
                'page': page,
                'pageSize': pageSize,
            },
            errors: {
                403: `Error: Forbidden`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Find diagnosis group by ID
     * Returns a single diagnosis group
     * @param id Record ID
     * @result DiagnosisGroupItem successful operation
     * @throws ApiError
     */
    public static async getDiagnosisGroupById(
        id: number,
    ): Promise<DiagnosisGroupItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/diagnosis/group/${id}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update an existing Diagnosis Group
     * Update a record based on data given
     * @param id Record ID
     * @param requestBody Diagnosis Group object to be updated
     * @result DiagnosisGroupRecordItem successful operation
     * @throws ApiError
     */
    public static async updateDiagnosisGroup(
        id: number,
        requestBody: DiagnosisGroupRecordItem,
    ): Promise<DiagnosisGroupRecordItem> {
        const result = await __request({
            method: 'PUT',
            path: `/server/diagnosis/group/${id}`,
            body: requestBody,
            errors: {
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Find multiple diagnosis groups.  Filterable by name, Diagnosis Domain Id.  Only one allowed.
     * Returns one or more matching diagnosis groups
     * @param name Find records searching by Name
     * @param diagnosisDomainId Find records associated with a given Diagnosis Domain
     * @param excludeDiagnosisDomainId Exclude records associated with a given Diagnosis Domain
     * @param page Page to begin results at
     * @param pageSize Number of results per page
     * @result any successful operation
     * @throws ApiError
     */
    public static async getDiagnosisGroupList(
        name?: string,
        diagnosisDomainId?: number,
        excludeDiagnosisDomainId?: number,
        page: number = 1,
        pageSize: number = 10,
    ): Promise<{
        data?: Array<DiagnosisGroupItem>,
        meta?: meta,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/diagnosis/group/list`,
            query: {
                'name': name,
                'diagnosisDomainId': diagnosisDomainId,
                'excludeDiagnosisDomainId': excludeDiagnosisDomainId,
                'page': page,
                'pageSize': pageSize,
            },
            errors: {
                403: `Error: Forbidden`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Find multiple diagnosis.  Filterable by name, GrantId, PlanId, or PoolId.  Only one allowed.
     * Returns one or more matching diagnosis
     * @param name Find records searching by Name
     * @param diagnosisGroupId Find records associated with a given Diagnosis Group
     * @param grantId Find records associated with a given Grant
     * @param planId Find records associated with a given Plan
     * @param poolId Find records associated with a given Pool
     * @param excludeGrantId Exclude records associated with a given Grant
     * @param excludePlanId Exclude records associated with a given Plan
     * @param excludePoolId Exclude records associated with a given Pool
     * @param excludeDiagnosisGroupId Exclude records associated with a given Diagnosis Group
     * @param page Page to begin results at
     * @param pageSize Number of results per page
     * @result any successful operation
     * @throws ApiError
     */
    public static async getDiagnosisList(
        name?: string,
        diagnosisGroupId?: number,
        grantId?: number,
        planId?: number,
        poolId?: number,
        excludeGrantId?: number,
        excludePlanId?: number,
        excludePoolId?: number,
        excludeDiagnosisGroupId?: number,
        page: number = 1,
        pageSize: number = 10,
    ): Promise<{
        data?: Array<DiagnosisRecordItem>,
        meta?: meta,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/diagnosis/list`,
            query: {
                'name': name,
                'diagnosisGroupId': diagnosisGroupId,
                'grantId': grantId,
                'planId': planId,
                'poolId': poolId,
                'excludeGrantId': excludeGrantId,
                'excludePlanId': excludePlanId,
                'excludePoolId': excludePoolId,
                'excludeDiagnosisGroupId': excludeDiagnosisGroupId,
                'page': page,
                'pageSize': pageSize,
            },
            errors: {
                403: `Error: Forbidden`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Search Diagnosis Tree by name
     * Returns a list if matching diagnosis domains and children
     * @param name Find records searching by Name
     * @param exclude Choose to exclude diagnosis already linked to a 'plan', 'pool', or 'grant'
     * @param excludeId ID of item to exclude
     * @result any successful operation
     * @throws ApiError
     */
    public static async searchDiagnnosisTree(
        name?: string,
        exclude: string = '',
        excludeId?: number,
    ): Promise<{
        data?: Array<DiagnosisDomainItem>,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/diagnosis/domain/search`,
            query: {
                'name': name,
                'exclude': exclude,
                'excludeId': excludeId,
            },
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Create a Diagnosis
     * Creates a record based on data given
     * @param requestBody Diagnosis object to be created
     * @result DiagnosisRecordItem successful operation
     * @throws ApiError
     */
    public static async createDiagnosis(
        requestBody: DiagnosisRecordItem,
    ): Promise<DiagnosisRecordItem> {
        const result = await __request({
            method: 'POST',
            path: `/server/diagnosis`,
            body: requestBody,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Create a new  Diagnosis Domain
     * Creates a record based on data given
     * @param requestBody Diagnosis Domain object to be created
     * @result DiagnosisDomainRecordItem successful operation
     * @throws ApiError
     */
    public static async createDiagnosisDomain(
        requestBody: DiagnosisDomainRecordItem,
    ): Promise<DiagnosisDomainRecordItem> {
        const result = await __request({
            method: 'POST',
            path: `/server/diagnosis/domain`,
            body: requestBody,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Create a Diagnosis Group
     * Creates a record based on data given
     * @param requestBody Diagnosis Group object to be created
     * @result DiagnosisGroupRecordItem successful operation
     * @throws ApiError
     */
    public static async createDiagnosisGroup(
        requestBody: DiagnosisGroupRecordItem,
    ): Promise<DiagnosisGroupRecordItem> {
        const result = await __request({
            method: 'POST',
            path: `/server/diagnosis/group`,
            body: requestBody,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

}