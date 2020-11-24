/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MembershipCensusItem } from '../models/MembershipCensusItem';
import type { MembershipPlanList } from '../models/MembershipPlanList';
import type { MembershipPlanRecordItem } from '../models/MembershipPlanRecordItem';
import type { meta } from '../models/meta';
import { request as __request } from '../core/request';

export class MembershipService {

    /**
     * Find census members by Membership Plan ID.
     * Returns matching record
     * @param id Membership Plan ID
     * @param page Page to begin results at
     * @param pageSize Number of results per page
     * @result any successful operation
     * @throws ApiError
     */
    public static async getMembershipCensusById(
        id: number,
        page: number = 1,
        pageSize: number = 10,
    ): Promise<{
        data?: Array<MembershipCensusItem>,
        meta?: meta,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/membership/census/${id}/members`,
            query: {
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
     * Find mempership plan by ID.
     * Returns matching record
     * @param id Record ID
     * @result MembershipPlanRecordItem successful operation
     * @throws ApiError
     */
    public static async getMembershipPlanById(
        id: number,
    ): Promise<MembershipPlanRecordItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/membership/plan/${id}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update an existing membershipPlan
     * Update a record based on data given
     * @param id Record ID
     * @param requestBody MembershipPlan object that needs to be updated
     * @result MembershipPlanRecordItem Successful operation
     * @throws ApiError
     */
    public static async updateMembershipPlan(
        id: number,
        requestBody: MembershipPlanRecordItem,
    ): Promise<MembershipPlanRecordItem> {
        const result = await __request({
            method: 'PUT',
            path: `/server/membership/plan/${id}`,
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
     * Find multiple membership plans.  Filterable by name
     * Returns one or more matching records
     * @param name Find records searching by Name
     * @param grantId Find records associated with a given Grant
     * @param diagnosisDomainId Find records associated with a given Diagnosis Domain
     * @param diagnosisId Find records associated with a given Diagnosis
     * @param page Page to begin results at
     * @param pageSize Number of results per page
     * @result any successful operation
     * @throws ApiError
     */
    public static async getMembershipPlanList(
        name?: string,
        grantId?: number,
        diagnosisDomainId?: number,
        diagnosisId?: number,
        page: number = 1,
        pageSize: number = 10,
    ): Promise<{
        data?: Array<MembershipPlanList>,
        meta?: meta,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/membership/plan/list`,
            query: {
                'name': name,
                'grantId': grantId,
                'diagnosisDomainId': diagnosisDomainId,
                'diagnosisId': diagnosisId,
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
     * Create a new membershipPlan
     * Creates a record based on data given
     * @param requestBody MembershipPlan object to be created
     * @result MembershipPlanRecordItem Successful operation
     * @throws ApiError
     */
    public static async createMembershipPlan(
        requestBody: MembershipPlanRecordItem,
    ): Promise<MembershipPlanRecordItem> {
        const result = await __request({
            method: 'POST',
            path: `/server/membership/plan`,
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
     * Add a diagnosis to a plan
     * Creates a record based on data given
     * @param id Record ID
     * @param diagnosisId ID of diagnosis to add to plan
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addPlanDiagnosis(
        id: number,
        diagnosisId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/membership/plan/${id}/diagnosis/${diagnosisId}`,
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
     * Remove a diagnosis from a plan
     * Remove a record based on data given
     * @param id Record ID
     * @param diagnosisId ID of diagnosis to remove from plan
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deletePlanDiagnosis(
        id: number,
        diagnosisId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/membership/plan/${id}/diagnosis/${diagnosisId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Add a domain to a plan
     * Creates a record based on data given
     * @param id Record ID
     * @param domainId ID of domain to add to plan
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addPlanDomain(
        id: number,
        domainId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/membership/plan/${id}/domain/${domainId}`,
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
     * Remove a domain from a plan
     * Remove a record based on data given
     * @param id Record ID
     * @param domainId ID of domain to remove from plan
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deletePlanDomain(
        id: number,
        domainId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/membership/plan/${id}/domain/${domainId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Add a grant to a plan
     * Creates a record based on data given
     * @param id Record ID
     * @param grantId ID of grant to add to plan
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addPlanGrant(
        id: number,
        grantId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/membership/plan/${id}/grant/${grantId}`,
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
     * Remove a grant from a plan
     * Remove a record based on data given
     * @param id Record ID
     * @param grantId ID of grant to remove from plan
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deletePlanGrant(
        id: number,
        grantId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/membership/plan/${id}/grant/${grantId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Add a manager to a plan
     * Creates a record based on data given
     * @param id Record ID
     * @param userId ID of manager to add to plan
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addPlanManager(
        id: number,
        userId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/membership/plan/${id}/manager/${userId}`,
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
     * Remove a manager from a plan
     * Remove a record based on data given
     * @param id Record ID
     * @param userId ID of manager to remove from plan
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deletePlanManager(
        id: number,
        userId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/membership/plan/${id}/manager/${userId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

}