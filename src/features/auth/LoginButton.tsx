'use client';
import type { JSX } from 'react';
import { useCallback } from 'react';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/router';

import { LOGIN_PAGE_URL } from '@/common/common-constants';
import { useAuthToken } from '@/features/auth/hooks/use-auth-token';
import { useAuthorized } from '@/features/auth/hooks/use-authorized';

const LoginButton = (): JSX.Element => {
  const router = useRouter();
  const { setToken } = useAuthToken();
  const isAuthorized = useAuthorized();
  const handleLoginClick = useCallback(() => router.push(LOGIN_PAGE_URL), [router]);
  const handleLogoutClick = useCallback(() => setToken(''), [setToken]);
  return isAuthorized ? (
    <Button onClick={handleLogoutClick}>Logout</Button>
  ) : (
    <Button onClick={handleLoginClick}>Login</Button>
  );
};

export default LoginButton;
