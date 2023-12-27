import type { JSX } from 'react';
import { StrictMode } from 'react';

import { NextUIProvider } from '@nextui-org/system';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import favicon from '@/assets/favicon.ico';
import '@/assets/global.scss';
import Layout from '@/common/components/Layout';
import AuthWrapper from '@/features/auth/AuthWrapper';

import packageJson from '../../package.json';

type AppPropsWithLayout = AppProps & {
  Component: NextPage;
};

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: { retry: 0 },
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

const App = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <Head>
          <title>{pageProps.title}</title>
          <meta name='build version' content={packageJson.version} />
          <meta name='viewport' content='initial-scale=1, width=device-width' />
          <link rel='shortcut icon' href={favicon.src} type='image/x-icon' />
        </Head>
        <Layout>
          <AuthWrapper>
            <Component {...pageProps} />
          </AuthWrapper>
        </Layout>
      </NextUIProvider>
    </QueryClientProvider>
  </StrictMode>
);

export default App;
