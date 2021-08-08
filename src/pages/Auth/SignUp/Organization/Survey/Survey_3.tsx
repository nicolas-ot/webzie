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
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Organization/Mini Survey/Who Are You/pexels-rodnae-productions-6647177.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>NGOs</p>
                    </div>
                </div>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Organization/Mini Survey/Who Are You/pexels-katerina-holmes-5905956.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>Educational Institute</p>
                    </div>
                </div>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Organization/Mini Survey/Who Are You/pexels-mentatdgt-1399282.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>Business</p>
                    </div>
                </div>
            </div>
            <div className={styles.rowCategory}>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Organization/Mini Survey/Who Are You/pexels-rodnae-productions-7413847.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>Venture Capital</p>
                    </div>
                </div>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Organization/Mini Survey/Who Are You/pexels-thirdman-5649893.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>University</p>
                    </div>
                </div>
                <div className={styles.Category}>
                    <img 
                    src= {require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Organization/Mini Survey/Who Are You/pexels-rodnae-productions-7841433.jpg')
                    .default
                } 
                    alt="asset"
                    width="100%" />
                    <div className={styles.categoryName}>
                        <p>Firm</p>
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