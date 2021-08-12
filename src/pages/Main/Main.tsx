import './main.scss';

import Layout from '../../hoc/Layout/Layout';
import Content from './Content/Content';

const Main = () => {
  return (
    <div className='main'>
      <Layout>
        {/* https://stackoverflow.com/questions/57091125/typescript-doesnt-know-that-component-gets-required-prop-from-hoc
        Required props are given by Layout Component. I don't know how to implement this omit interface
 // @ts-ignore */}
        <Content />
      </Layout>
    </div>
  );
};

export default Main;
