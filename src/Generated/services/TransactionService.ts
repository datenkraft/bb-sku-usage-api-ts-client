/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { patchResponseTransaction } from '../models/patchResponseTransaction';
import type { patchTransaction } from '../models/patchTransaction';
import type { postResponseTransaction } from '../models/postResponseTransaction';
import type { postSkuUsageCollectionRequest } from '../models/postSkuUsageCollectionRequest';
import type { transaction } from '../models/transaction';
import { request as __request } from '../core/request';

export class TransactionService {

    /**
     * Get Transactions from a Task
     * Get Transactions From a Task
     * @param taskId Task id
     * @param transactionId Transaction id
     * @param fields Fields to include in the response (separated by comma)
     * @returns transaction OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getTransaction(
        taskId: string,
        transactionId: string,
        fields?: string,
    ): Promise<transaction | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/task/${taskId}/transaction/${transactionId}`,
            query: {
                'fields': fields,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Update a Transaction
     * Update one or more fields of a Transaction
     * @param taskId Task id
     * @param transactionId Transaction id
     * @param requestBody
     * @returns patchResponseTransaction OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async patchTransaction(
        taskId: string,
        transactionId: string,
        requestBody: patchTransaction,
    ): Promise<patchResponseTransaction | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/task/${taskId}/transaction/${transactionId}`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

    /**
     * Add a Transaction of SKU Usages to a Task
     * Add a Transaction of SKU Usages to a Task
     * @param taskId Task id
     * @param requestBody
     * @returns errorResponse Unexpected error
     * @returns postResponseTransaction Accepted
     * @throws ApiError
     */
    public static async postTransactionSkuUsageCollection(
        taskId: string,
        requestBody: postSkuUsageCollectionRequest,
    ): Promise<errorResponse | postResponseTransaction> {
        const result = await __request({
            method: 'POST',
            path: `/task/${taskId}/transaction/sku-usage`,
            body: requestBody,
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server error`,
            },
        });
        return result.body;
    }

}