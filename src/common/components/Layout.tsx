import type { PropsWithChildren, ReactElement } from 'react';

import AuthButton from '@/features/auth/AuthButton';

import styles from './Layout.module.scss';
import Navigation from './Navigation';

export const rightsText = `© ${new Date().getFullYear()} All rights reserved`;

const Layout = ({ children }: PropsWithChildren<unknown>): ReactElement => (
  <div>
    <header className={styles.header}>
      <div className='flex items-baseline justify-between'>
        <Navigation />
        <AuthButton />
      </div>
    </header>
    <main className={styles.main}>
      <div className='h-full w-full'>{children}</div>
    </main>
    <footer className={styles.footer}>{rightsText}</footer>
  </div>
);

export default Layout;
