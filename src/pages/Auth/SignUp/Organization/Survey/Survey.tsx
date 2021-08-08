import styles from './Survey.module.scss';

import Survey_1 from './Survey_1';
import Survey_2 from './Survey_2';
import Survey_3 from './Survey_3';

const Survey = () => {
    return (
        
        <>

        <div className={styles.input}>
            <Survey_3 />
        </div>
        <div className={styles.image}>
            <img
            src={
                require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Organization/Mini Survey/Asset 2.jpg')
                .default
            }
            alt='asset'
            width='100%'
            height='100%'
            />
        </div>

        </>

    );
};

export default Survey;