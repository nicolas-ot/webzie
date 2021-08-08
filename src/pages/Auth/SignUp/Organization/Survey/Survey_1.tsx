import styles from './Survey_1.module.scss';

const Survey_1 = () => {
    return(
        <>

        <p className={styles.topic}>Survey</p>
        <p className={styles.subTopic}>Where is your office?</p>
        <div className={styles.formGroup}>
            <label>Country</label>
            <input type='text' placeholder='Your Country' />
        </div>
        <div className={styles.formGroup}>
            <label>Province</label>
            <input type='text' placeholder='Your Province' />
        </div>
        <div className={styles.formGroup}>
            <label>City</label>
            <input type='text' placeholder='Your City' />
        </div>
        <div className={styles.formGroup}>
            <label>Address</label>
            <input type='text' placeholder='Your Address' />
        </div>
        <div className={styles.boxButton}>
            <button>Next</button>
        </div>
        </>
    );
};

export default Survey_1;