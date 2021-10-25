/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Class TransactionResource
 */
export type transaction = {
    /**
     * Transaction Id
     */
    transactionId?: string;
    /**
     * Transaction Status
     */
    transactionStatus?: string;
    /**
     * Transaction Seen
     */
    transactionSeen?: boolean;
    /**
     * Transaction Resource Type
     */
    transactionResourceType?: string;
    /**
     * Entry Count
     */
    entryCount?: number;
    /**
     * Request Data
     */
    requestData?: any;
    /**
     * Response Data
     */
    responseData?: any;
}
