/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import { request as __request } from '../core/request';

export class ReportService {

    /**
     * Get a list of sku usage ids
     * Query a list of sku usage ids that match the selected filters
     * @param filterProjectId Project Id
     * @param filterMetaKey Key of the meta field
     * @param filterMetaValue Value of the meta field
     * @param filterUsageStart Start of the usage
     * @param filterUsageEnd End of the usage
     * @returns string OK
     * @returns errorResponse Unexpected Error
     * @throws ApiError
     */
    public static async getReportSkuUsageCollection(
        filterProjectId: string,
        filterMetaKey: string,
        filterMetaValue: string,
        filterUsageStart?: string,
        filterUsageEnd?: string,
    ): Promise<Array<string> | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/report/sku-usage`,
            query: {
                'filter[projectId]': filterProjectId,
                'filter[metaKey]': filterMetaKey,
                'filter[metaValue]': filterMetaValue,
                'filter[usageStart]': filterUsageStart,
                'filter[usageEnd]': filterUsageEnd,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                500: `Server Error`,
            },
        });
        return result.body;
    }

}