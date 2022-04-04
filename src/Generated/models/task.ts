/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { patchResponseTransaction } from './patchResponseTransaction';

/**
 * Class TaskResource
 */
export type task = {
    /**
     * Task Id
     */
    taskId: string;
    /**
     * Task Status
     */
    taskStatus: string;
    /**
     * Identity ID
     */
    identityId: string;
    /**
     * Entry Count
     */
    entryCount: number;
    /**
     * Transactions
     */
    transactions: Array<patchResponseTransaction>;
}
