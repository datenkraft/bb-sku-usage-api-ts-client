/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { errorResponse } from '../models/errorResponse';
import type { task } from '../models/task';
import type { updateResponseTask } from '../models/updateResponseTask';
import type { updateTask } from '../models/updateTask';
import { request as __request } from '../core/request';

export class TaskService {

    /**
     * Query Task data by taskId
     * Query Task data by taskId
     * @param taskId Task id
     * @returns task OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async getTask(
        taskId: string,
    ): Promise<task | errorResponse> {
        const result = await __request({
            method: 'GET',
            path: `/task/${taskId}`,
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
     * Update a Task
     * Update one or more fields of a Task
     * @param taskId Task Id
     * @param requestBody
     * @returns updateResponseTask OK
     * @returns errorResponse Unexpected error
     * @throws ApiError
     */
    public static async patchTask(
        taskId: string,
        requestBody: updateTask,
    ): Promise<updateResponseTask | errorResponse> {
        const result = await __request({
            method: 'PATCH',
            path: `/task/${taskId}`,
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