import { FC, Fragment } from 'react';
import Layout from 'src/components/layout';

const Home: FC = () => {
  return (
    <Fragment>
      <Layout>
        <h1 className="text-3xl font-bold underline">Home</h1>
      </Layout>
    </Fragment>
  );
}

export default Home;
