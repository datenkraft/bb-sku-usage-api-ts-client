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
    extra?: errorExtra;
}
