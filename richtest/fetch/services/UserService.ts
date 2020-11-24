/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddressRecordItem } from '../models/AddressRecordItem';
import type { BioRecordItem } from '../models/BioRecordItem';
import type { meta } from '../models/meta';
import type { UserItem } from '../models/UserItem';
import type { UserPartialItem } from '../models/UserPartialItem';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Find User Bio by User ID
     * Return a single User Bio
     * @param id Record ID
     * @result BioRecordItem successful operation
     * @throws ApiError
     */
    public static async getUserBioById(
        id: number,
    ): Promise<BioRecordItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/user/${id}/bio`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update an existing user Bio
     * Update a record based on data given
     * @param id Record ID
     * @param requestBody Bio object that needs to be updated
     * @result BioRecordItem successful operation
     * @throws ApiError
     */
    public static async updateBio(
        id: number,
        requestBody: BioRecordItem,
    ): Promise<Array<BioRecordItem>> {
        const result = await __request({
            method: 'PUT',
            path: `/server/user/${id}/bio`,
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
     * Create a new user bio
     * Creates a record based on data given
     * @param id Record ID
     * @param requestBody Bio object to be created
     * @result BioRecordItem successful operation
     * @throws ApiError
     */
    public static async createBio(
        id: number,
        requestBody: BioRecordItem,
    ): Promise<BioRecordItem> {
        const result = await __request({
            method: 'POST',
            path: `/server/user/${id}/bio`,
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
     * Find User by ID
     * Return a single User
     * @param id Record ID
     * @result UserItem successful operation
     * @throws ApiError
     */
    public static async getUserById(
        id: number,
    ): Promise<UserItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/user/profile/${id}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * List Users - filterable by name, email, user type or associated diagnosis group. Only one allowed
     * Returns one or more matching records
     * @param userType User Type to Limit
     * @param search Search user first, middle, last, and email for string
     * @param diagnosisGroupName Find Users associated with a given Diagnosis Group by Name
     * @param diagnosisGroupId Find records associated with a given Diagnosis Group
     * @param poolId Find records associated with a given Pool
     * @param excludePoolId Exclude records associated with a given Pool
     * @param excludeDiagnosisGroupId Exclude records associated with a given Diagnosis Group
     * @param page Page to begin results at
     * @param pageSize Number of results per page
     * @result any successful operation
     * @throws ApiError
     */
    public static async getUserList(
        userType?: number,
        search?: string,
        diagnosisGroupName?: string,
        diagnosisGroupId?: number,
        poolId?: number,
        excludePoolId?: number,
        excludeDiagnosisGroupId?: number,
        page: number = 1,
        pageSize: number = 10,
    ): Promise<{
        data?: Array<UserPartialItem>,
        meta?: meta,
    }> {
        const result = await __request({
            method: 'GET',
            path: `/server/user/list`,
            query: {
                'userType': userType,
                'search': search,
                'diagnosisGroupName': diagnosisGroupName,
                'diagnosisGroupId': diagnosisGroupId,
                'poolId': poolId,
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
     * Find User Partial by ID
     * Return a single User Partial
     * @param id Record ID
     * @result UserPartialItem successful operation
     * @throws ApiError
     */
    public static async getUserPartialById(
        id: number,
    ): Promise<UserPartialItem> {
        const result = await __request({
            method: 'GET',
            path: `/server/user/${id}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update an existing user address
     * Update a record based on data given
     * @param id Record ID
     * @param requestBody Address object that needs to be updated
     * @result AddressRecordItem successful operation
     * @throws ApiError
     */
    public static async updateAddress(
        id: number,
        requestBody: AddressRecordItem,
    ): Promise<Array<AddressRecordItem>> {
        const result = await __request({
            method: 'PUT',
            path: `/server/user/${id}/address`,
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
     * Create a new user address
     * Creates a record based on data given
     * @param id Record ID
     * @param requestBody Address object to be created
     * @result AddressRecordItem successful operation
     * @throws ApiError
     */
    public static async createAddress(
        id: number,
        requestBody: AddressRecordItem,
    ): Promise<AddressRecordItem> {
        const result = await __request({
            method: 'POST',
            path: `/server/user/${id}/address`,
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
     * Add a diagnosis group to a user
     * Creates a record based on data given
     * @param id Record ID
     * @param groupId ID of diagnosis group to add to user
     * @result any Successful operation
     * @throws ApiError
     */
    public static async addUserDiagnosisGroup(
        id: number,
        groupId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'POST',
            path: `/server/user/${id}/diagnosisGroup/${groupId}`,
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
     * Remove a diagnosis group from a user
     * Remove a record based on data given
     * @param id Record ID
     * @param groupId ID of diagnosis group to remove from user
     * @result any Successful operation
     * @throws ApiError
     */
    public static async deleteUserDiagnosisGroup(
        id: number,
        groupId: number,
    ): Promise<any> {
        const result = await __request({
            method: 'DELETE',
            path: `/server/user/${id}/diagnosisGroup/${groupId}`,
            errors: {
                403: `Error: Forbidden`,
                404: `Error: Not Found`,
                422: `Error: Unprocessable Entity`,
            },
        });
        return result.body;
    }

}