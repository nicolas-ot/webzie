import styles from './Content.module.scss';

import Information from './Information/Organization';
import Survey from './Survey/Survey';

const Layout = () => {

    return (
        <>
        <div className={styles.boxSignin}>
            <Information />
          </div>
        </>
    );
};

export default Layout;