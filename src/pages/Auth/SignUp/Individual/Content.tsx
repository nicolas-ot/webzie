import styles from './Content.module.scss';

import Information from './Information/Individual';
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