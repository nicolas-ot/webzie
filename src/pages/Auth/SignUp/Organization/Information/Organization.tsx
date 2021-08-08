import styles from './Organization.module.scss';


import Organization_1 from './Organization_1';
import Organization_2 from './Organization_2';
import Organization_3 from './Organization_3';

const Organization = () => {
    return (

        <>
        
        <div className={styles.image}>
            <img
            src={
                require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Organization/Information/Asset 1.jpg')
                .default
            }
            alt='asset'
            width='100%'
            height='100%'
            />
        </div>
        <div className={styles.input}>
            <Organization_3 />
        </div>

        </>

    );
};

export default Organization;