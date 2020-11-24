/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GrantItem } from '../models/GrantItem';
import type { GrantPartialItem } from '../models/GrantPartialItem';
import type { GrantRecordItem } from '../models/GrantRecordItem';
import type { meta } from '../models/meta';
import { request as __request } from '../core/request';

export class GrantService {

    /**
     * Find GrantRecord by ID
     * Return a single GrantRecord
     * @param id Record ID
     * @result GrantRecordItem successful operation
     * @throws ApiError
     */
    public static async getGrantById(
        id: number,
    ): Promise<GrantRecordItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/grant/${id}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update an existing grant
     * Update a record based on data given
     * @param id Record ID
     * @param requestBody Grant object that needs to be updated
     * @result GrantRecordItem Successful operation
     * @throws ApiError
     */
    public static async updateGrant(
        id: number,
        requestBody: GrantRecordItem,
    ): Promise<GrantRecordItem> {
        const result = await __request({
            method: 'PUT',
            path: `/server/grant/${id}`,
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
     * Find grant by grant ID with any associated diagnosis data
     * Find grant by grant ID with any associated diagnosis data
     * @param id Record ID
     * @result GrantItem successful operation
     * @throws ApiError
     */
    public static async getGrantDiagnosisById(
        id: number,
    ): Promise<GrantItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/grant/${id}/diagnosis`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Find multiple grants.  Filterable by name, Diagnosis Id, Diagnosis Domain Id, Plan Id. Only one allowed
     * Returns one or more matching grants
     * @param name Find records searching by Name
     * @param diagnosisId Find records associated with a given Diagnosis
     * @param diagnosisDomainId Find records associated with a given Diagnosis Domain
     * @param planId Find records associated with a given Plan
     * @param excludeDiagnosisId Exclude records associated with a given Diagnosis
     * @param excludeDiagnosisDomainId Exclude records associated with a given Diagnosis Domain
     * @param excludePlanId Exclude records associated with a given Plan
     * @param page Page to begin results at
     * @param pageSize Number of results per page
     * @result any successful operation
     * @throws ApiError
     */
    public static async getGrantList(
        name?: string,
        diagnosisId?: number,
        diagnosisDomainId?: number,
        planId?: number,
        excludeDiagnosisId?: number,
        excludeDiagnosisDomainId?: number,
        excludePlanId?: number,
        page: number = 1,
        pageSize: number = 10,
    ): Promise<{
        data?: Array<GrantPartialItem>,
        meta?: meta,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/grant/list`,
            query: {
                'name': name,
                'diagnosisId': diagnosisId,
                'diagnosisDomainId': diagnosisDomainId,
                'planId': planId,
                'excludeDiagnosisId': excludeDiagnosisId,
                'excludeDiagnosisDomainId': excludeDiagnosisDomainId,
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
     * Create a new grant
     * Creates a record based on data given
     * @param requestBody Grant object to be created
     * @result GrantRecordItem Successful operation
     * @throws ApiError
     */
    public static async createGrant(
        requestBody: GrantRecordItem,
    ): Promise<GrantRecordItem> {
        const result = await __request({
            method: 'POST',
            path: `/server/grant`,
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
     * Add a diagnosis to a grant
     * Creates a record based on data given
     * @param id Record ID
     * @param diagnosisId ID of diagnosis to add to grant
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addGrantDiagnosis(
        id: number,
        diagnosisId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/grant/${id}/diagnosis/${diagnosisId}`,
            errors: {
                400: `Error: Bad Request`,
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Remove a diagnosis from a grant
     * Remove a record based on data given
     * @param id Record ID
     * @param diagnosisId ID of diagnosis to remove from grant
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deleteGrantDiagnosis(
        id: number,
        diagnosisId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/grant/${id}/diagnosis/${diagnosisId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Add a domain to a grant
     * Creates a record based on data given
     * @param id Record ID
     * @param domainId ID of domain to add to grant
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addGrantDiagnosisDomain(
        id: number,
        domainId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/grant/${id}/domain/${domainId}`,
            errors: {
                400: `Error: Bad Request`,
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Remove a domain from a grant
     * Remove a record based on data given
     * @param id Record ID
     * @param domainId ID of domain to remove from grant
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deleteGrantDiagnosisDomain(
        id: number,
        domainId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/grant/${id}/domain/${domainId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Add a pool to a grant
     * Creates a record based on data given
     * @param id Record ID
     * @param poolId ID of pool to add to grant
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addGrantPool(
        id: number,
        poolId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/grant/${id}/pool/${poolId}`,
            errors: {
                400: `Error: Bad Request`,
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Remove a pool from a grant
     * Removes a record based on data given
     * @param id Record ID
     * @param poolId ID of pool to remove from grant
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deleteGrantpool(
        id: number,
        poolId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/grant/${id}/pool/${poolId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

}