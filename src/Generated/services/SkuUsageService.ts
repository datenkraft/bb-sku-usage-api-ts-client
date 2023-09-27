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
     * Query SKU Usage data by projectId and externalId OR by skuUsageIds OR by skuGroupIds.\
     * At least one of those three options must be given.\
     * Combining projectId and externalId with skuUsageIds is not possible.
     * Query SKU Usage data by projectId and externalId OR skuUsageIds OR skuGroupIds.\
     * At least one of those three options must be given.\
     * Combining projectId and externalId with skuUsageIds is not possible.
     * @param filterProjectId ProjectId filter
     * - Required with filter[externalId]
     * - Must not be present with filter[skuUsageIds]
     * @param filterExternalId ExternalId filter
     * - Required with filter[projectId]
     * - Must not be present with filter[skuUsageIds]
     * @param filterSkuUsageIds SkuUsageIds filter
     * - Must not be present with filter[projectId] and filter[externalId]
     * @param filterSkuGroupIds SkuGroupIds filter
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