/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { getSkuUsageResponse } from '../models/getSkuUsageResponse';
import type { postSkuUsageCollectionRequest } from '../models/postSkuUsageCollectionRequest';
import type { postSkuUsageCollectionResponse } from '../models/postSkuUsageCollectionResponse';
import { request as __request } from '../core/request';

export class SkuUsageService {

    /**
     * Query SKU Usage data by projectId and externalId OR by skuUsageIds. At least one of those two options must be given
     * Query SKU Usage data by projectId and externalId OR by skuUsageIds. At least one of those two options must be given
     * @param filterProjectId SKUUsage ProjectId filter
     * @param filterExternalId SKUUsage ExternalId filter
     * @param filterSkuUsageIds SKUUsage SkuUsageIds filter
     * @param filterSkuGroupIds SKUUsage SkuGroupIds filter
     * @returns getSkuUsageResponse OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getSkuUsage(
        filterProjectId?: string,
        filterExternalId?: string,
        filterSkuUsageIds?: string,
        filterSkuGroupIds?: string,
    ): Promise<getSkuUsageResponse | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/sku-usage`,
            query: {
                'filter[projectId]': filterProjectId,
                'filter[externalId]': filterExternalId,
                'filter[skuUsageIds]': filterSkuUsageIds,
                'filter[skuGroupIds]': filterSkuGroupIds,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Add SKU Usage data
     * Add SKU Usage data
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns postSkuUsageCollectionResponse Created
     * @throws ApiError
     */
    public static async postSkuUsageCollection(
        requestBody: postSkuUsageCollectionRequest,
    ): Promise<errorResponse | postSkuUsageCollectionResponse> {
        const result = await __request({
            method: 'POST',
            path: `/sku-usage`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                409: `Conflict`,
                422: `Unprocessable Entity`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}