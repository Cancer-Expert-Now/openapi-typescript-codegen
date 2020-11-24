/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { meta } from '../models/meta';
import type { QueryHeaderPartialList } from '../models/QueryHeaderPartialList';
import type { QueryHeaderRecordItem } from '../models/QueryHeaderRecordItem';
import type { QueryHeaderStatusCountItem } from '../models/QueryHeaderStatusCountItem';
import { request as __request } from '../core/request';

export class QueryService {

    /**
     * Find query header by ID.
     * Returns matching record
     * @param id Record ID
     * @result QueryHeaderRecordItem successful operation
     * @throws ApiError
     */
    public static async getQueryHeaderById(
        id: number,
    ): Promise<QueryHeaderRecordItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/query/${id}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update an existing query header
     * Update a record based on data given
     * @param id Record ID
     * @param requestBody QueryHeader object that needs to be updated
     * @result QueryHeaderRecordItem Successful operation
     * @throws ApiError
     */
    public static async updateQueryHeader(
        id: number,
        requestBody: QueryHeaderRecordItem,
    ): Promise<QueryHeaderRecordItem> {
        const result = await __request({
            method: 'PUT',
            path: `/server/query/${id}`,
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
     * Find multiple queries.  Filterable by category, diagnosisId, grantId, planId, poolId, status, tags, text, userId
     * Returns one or more matching records
     * @param diagnosisId Find records associated with a given Diagnosis
     * @param grantId Find records associated with a given Grant
     * @param planId Find records associated with a given Plan
     * @param poolId Find records associated with a given Pool
     * @param status Query Status
     * @param tags Find records searching by Tags
     * @param text Find records searching by Text
     * @param category Find records searching by Category
     * @param userId Find records associated with a given User
     * @param page Page to begin results at
     * @param pageSize Number of results per page
     * @result any successful operation
     * @throws ApiError
     */
    public static async getQueryHeaderList(
        diagnosisId?: number,
        grantId?: number,
        planId?: number,
        poolId?: number,
        status?: 'open' | 'closed' | 'answered' | 'held' | 'pending_charge' | 'charged' | 'create' | 'csrhold' | 'cancelled' | 'pending_survey',
        tags?: string,
        text?: string,
        category?: string,
        userId?: number,
        page: number = 1,
        pageSize: number = 10,
    ): Promise<{
        data?: Array<QueryHeaderPartialList>,
        meta?: meta,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/query/list`,
            query: {
                'diagnosisId': diagnosisId,
                'grantId': grantId,
                'planId': planId,
                'poolId': poolId,
                'status': status,
                'tags': tags,
                'text': text,
                'category': category,
                'userId': userId,
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
     * Find record counts grouped by Status.
     * Returns one or more records with count
     * @param status Return count for specific status
     * @result any successful operation
     * @throws ApiError
     */
    public static async getQueryHeaderStatusCount(
        status?: 'open' | 'closed' | 'answered' | 'held' | 'pending_charge' | 'charged' | 'create' | 'csrhold' | 'cancelled' | 'pending_survey',
    ): Promise<{
        data?: Array<QueryHeaderStatusCountItem>,
        meta?: meta,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/query/status`,
            query: {
                'status': status,
            },
            errors: {
                403: `Error: Forbidden`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Create a new query header
     * Creates a record based on data given
     * @param requestBody Query Header object to be created
     * @result QueryHeaderRecordItem Successful operation
     * @throws ApiError
     */
    public static async createQueryHeader(
        requestBody: QueryHeaderRecordItem,
    ): Promise<QueryHeaderRecordItem> {
        const result = await __request({
            method: 'POST',
            path: `/server/query`,
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