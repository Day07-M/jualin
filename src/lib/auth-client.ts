import { BACKEND_API } from '../../config';

import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient({
  baseURL: BACKEND_API,
});
