import styles from './Individual.module.scss';


import Individual_1 from './Individual_1';
import Individual_2 from './Individual_2';
import Individual_3 from './Individual_3';

const Individual = () => {
    return (

        <>
        
        <div className={styles.image}>
            <img
            src={
                require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Personal/Information/Asset 1.jpg')
                .default
            }
            alt='asset'
            width='100%'
            height='100%'
            />
        </div>
        <div className={styles.input}>
            <Individual_2 />
        </div>

        </>

    );
};

export default Individual;