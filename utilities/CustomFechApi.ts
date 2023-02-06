import { FetchOptions } from 'ohmyfetch';
import { ApiResponse, AppStatusCode } from '~~/models/ApiResponse';

export async function FetchApi<T>(
    url: string,
    config: FetchOptions = {}
): Promise<ApiResponse<T>> {
    var customConfig = {
        baseURL: 'https://shop-api.codeyad-project.ir/api',
        ...config,
    };
    return $fetch<ApiResponse<T>>(url, customConfig)
    .then((res) => {
        return res
    })
    
}
