/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type newSkuUsage = {
    /**
     * SKU Code
     */
    skuCode: string;
    /**
     * Quantity
     */
    quantity: number;
    /**
     * Project Id
     */
    projectId: string;
    /**
     * Start time of the usage
     */
    usageStart: string;
    /**
     * End time of the usage
     */
    usageEnd: string;
    /**
     * External Id\
     * Note: This is not required if the skuCode is 'su-manual-correction'.
     */
    externalId: string;
    /**
     * Meta
     */
    meta?: any;
}
