/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { errorExtra } from './errorExtra';

export type error = {
    /**
     * Code
     */
    code: string;
    /**
     * Message
     */
    message: string;
    /**
     * References
     */
    references?: Array<{
        /**
         * The key of the field causing the error
         */
        key?: string,
        /**
         * The value of the field causing the error
         */
        value?: any,
        /**
         * The exact reference to the field causing the error
         */
        fieldReference?: string | null,
    }>;
    extra?: errorExtra;
}
