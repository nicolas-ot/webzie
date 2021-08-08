import styles from './Survey_3.module.scss';

const Survey_3 = () => {
    return(
        <>

        <p className={styles.topic}>Survey</p>
        <p className={styles.subTopic}>Who are you?</p>
        <div className={styles.boxCategory}>
            <div className={styles.rowCategory}>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Personal/Mini Survey/Who Are You/pexels-andrea-piacquadio-3793238.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>Student</p>
                    </div>
                </div>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Personal/Mini Survey/Who Are You/pexels-daria-shevtsova-3277920.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>Teacher & Lecturer</p>
                    </div>
                </div>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Personal/Mini Survey/Who Are You/pexels-katerina-holmes-5905497.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>Freelance</p>
                    </div>
                </div>
            </div>
            <div className={styles.rowCategory}>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Personal/Mini Survey/Who Are You/pexels-ketut-subiyanto-4473398.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>Collage Student</p>
                    </div>
                </div>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Personal/Mini Survey/Who Are You/pexels-max-fischer-5212353.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>Business Owner</p>
                    </div>
                </div>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Personal/Mini Survey/Who Are You/pexels-mentatdgt-937481.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>Professional</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.boxButton}>
            <button className={styles.btnBack}>Back</button>
            <button className={styles.btnNext}>Next</button>
        </div>
        </>
    );
};

export default Survey_3;