import styles from './Survey_2.module.scss';

const Survey_2 = () => {
    return(
        <>

        <p className={styles.topic}>Survey</p>
        <p className={styles.subTopic}>What are you interested in?</p>
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
                        <p>Arcitect</p>
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
                        <p>Film & Photographt</p>
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
                        <p>Fashion</p>
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
                        <p>Sport</p>
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
                        <p>Parenting</p>
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
                        <p>Finance</p>
                    </div>
                </div>
            </div>
            <div className={styles.leftBtn}>
                <img src={require('../../../../../assets/images/Icon SVGs/arrow_drop_down_black_48dp.svg').default}
                 alt="arrow" width="70%" />
            </div>
            <div className={styles.rightBtn}>
                <img src={require('../../../../../assets/images/Icon SVGs/arrow_drop_down_black_48dp.svg').default}
                 alt="arrow" width="70%" />
            </div>
            <p className={styles.info}>*You may choose more than one</p>
        </div>
        <div className={styles.boxButton}>
            <button className={styles.btnBack}>Back</button>
            <button className={styles.btnNext}>Next</button>
        </div>
        </>
    );
};

export default Survey_2;