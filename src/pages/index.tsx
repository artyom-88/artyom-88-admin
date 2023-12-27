import type { JSX } from 'react';

import Summary from '@/features/summary/Summary';

const Home = (): JSX.Element => (
  <div className='flex flex-col'>
    <h1>Site structure</h1>
    <Summary />
  </div>
);

export default Home;
