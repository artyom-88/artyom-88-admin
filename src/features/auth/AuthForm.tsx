import type { ChangeEvent, JSX } from 'react';
import { useCallback, useState } from 'react';

import { Button, Input } from '@nextui-org/react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { loginApi } from '@/features/auth/auth-api';
import { useAuthToken } from '@/features/auth/hooks/use-auth-token';

import styles from './AuthForm.module.scss';

const AuthForm = (): JSX.Element => {
  const router = useRouter();
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { setToken } = useAuthToken();
  const { mutate } = useMutation<string>({
    mutationFn: async () => {
      if (!login) {
        setError('Invalid login');
        return '';
      }
      if (!password) {
        setError('Invalid password');
        return '';
      }
      const { authToken } = await loginApi(login, password);
      return authToken;
    },
    onSuccess: (token: string) => {
      setToken(token);
      void router.push('/');
    },
    onError: (error) => {
      setError(error.message);
    },
  });
  const handleLoginChange = useCallback(({ target }: ChangeEvent<HTMLInputElement>) => setLogin(target.value), []);
  const handlePasswordChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => setPassword(target.value),
    []
  );
  const handleLogin = useCallback(() => mutate(), [mutate]);
  return (
    <div className={`flex flex-col justify-center ${styles.form}`}>
      <div className={styles.formItem}>
        <Input placeholder='Login' onChange={handleLoginChange} />
      </div>
      <div className={styles.formItem}>
        <Input placeholder='Password' type='password' onChange={handlePasswordChange} />
      </div>
      <div className={styles.formItem}>
        <Button onClick={handleLogin} size='sm'>
          Login
        </Button>
      </div>
      {error ? <div className={`${styles.formItem} ${styles.error}`}>{error}</div> : null}
    </div>
  );
};

export default AuthForm;
