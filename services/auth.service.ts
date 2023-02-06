import { ApiResponse } from '~~/models/ApiResponse';
import { FetchApi } from '~~/utilities/CustomFechApi';

export function RegisterUser(command: RegisterDTo ): Promise<ApiResponse<null>> {
    return FetchApi("/auth/register", {
        method: 'Post',
        body: command,
    });
}
