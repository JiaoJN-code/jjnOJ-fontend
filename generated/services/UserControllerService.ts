/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_LoginUserVo_ } from '../models/BaseResponse_LoginUserVo_';
import type { UserLoginRequest } from '../models/UserLoginRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserControllerService {

    /**
     * getLoginUser
     * @returns BaseResponse_LoginUserVo_ OK
     * @throws ApiError
     */
    public static getLoginUserUsingGet(): CancelablePromise<BaseResponse_LoginUserVo_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/getLoginUser',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

    /**
     * userLogin
     * @param requestBody 
     * @returns BaseResponse_LoginUserVo_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static userLoginUsingPost(
requestBody?: UserLoginRequest,
): CancelablePromise<BaseResponse_LoginUserVo_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/login',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }

}
