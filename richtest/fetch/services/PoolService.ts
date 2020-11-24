/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { meta } from '../models/meta';
import type { PoolItem } from '../models/PoolItem';
import type { PoolRecordItem } from '../models/PoolRecordItem';
import { request as __request } from '../core/request';

export class PoolService {

    /**
     * Find pool  by ID.
     * Returns matching record
     * @param id Record ID
     * @result PoolItem successful operation
     * @throws ApiError
     */
    public static async getPoolById(
        id: number,
    ): Promise<PoolItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/pool/${id}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update an existing pool
     * Update a record based on data given
     * @param id Record ID
     * @param requestBody Pool object that needs to be updated
     * @result PoolRecordItem Successful operation
     * @throws ApiError
     */
    public static async updatePool(
        id: number,
        requestBody: PoolRecordItem,
    ): Promise<PoolRecordItem> {
        const result = await __request({
            method: 'PUT',
            path: `/server/pool/${id}`,
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
     * Find multiple pools.  Filterable by name, Grant ID, and Plan ID.  Only one allowed
     * Returns one or more matching records
     * @param name Find records searching by Name
     * @param grantId Find records associated with a given Grant
     * @param planId Find records associated with a given Plan
     * @param excludeGrantId Exclude records associated with a given Grant
     * @param excludePlanId Exclude records associated with a given Plan
     * @param page Page to begin results at
     * @param pageSize Number of results per page
     * @result any successful operation
     * @throws ApiError
     */
    public static async getPoolList(
        name?: string,
        grantId?: number,
        planId?: number,
        excludeGrantId?: number,
        excludePlanId?: number,
        page: number = 1,
        pageSize: number = 10,
    ): Promise<{
        data?: Array<PoolRecordItem>,
        meta?: meta,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/pool/list`,
            query: {
                'name': name,
                'grantId': grantId,
                'planId': planId,
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
     * Create a new pool
     * Creates a record based on data given
     * @param requestBody Pool object to be created
     * @result PoolRecordItem Successful operation
     * @throws ApiError
     */
    public static async createPool(
        requestBody: PoolRecordItem,
    ): Promise<PoolRecordItem> {
        const result = await __request({
            method: 'POST',
            path: `/server/pool`,
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
     * Add a diagnosis to a pool
     * Creates a record based on data given
     * @param id Record ID
     * @param diagnosisId ID of diagnosis to add to pool
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addPoolDiagnosis(
        id: number,
        diagnosisId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/pool/${id}/diagnosis/${diagnosisId}`,
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
     * Remove a diagnosis from a pool
     * Remove a record based on data given
     * @param id Record ID
     * @param diagnosisId ID of diagnosis to remove from pool
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deletePoolDiagnosis(
        id: number,
        diagnosisId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/pool/${id}/diagnosis/${diagnosisId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Add an expert to a pool
     * Creates a record based on data given
     * @param id Record ID
     * @param expertId ID of expert to add to pool
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addPoolExpert(
        id: number,
        expertId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/pool/${id}/expert/${expertId}`,
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
     * Remove an expert from a pool
     * Remove a record based on data given
     * @param id Record ID
     * @param expertId ID of expert to remove from pool
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deletePoolExpert(
        id: number,
        expertId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/pool/${id}/expert/${expertId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Add a plan to a pool
     * Creates a record based on data given
     * @param id Record ID
     * @param planId ID of plan to add to pool
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addPlan(
        id: number,
        planId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/pool/${id}/plan/${planId}`,
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
     * Remove a plan from a pool
     * Remove a record based on data given
     * @param id Record ID
     * @param planId ID of plan to remove from pool
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deletePlan(
        id: number,
        planId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/pool/${id}/plan/${planId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

}