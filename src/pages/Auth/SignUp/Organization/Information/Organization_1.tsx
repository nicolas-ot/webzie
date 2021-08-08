import styles from './Organization_1.module.scss';

const Organization_1 = () => {
    return (

        <>
        
        <p className={styles.topic}>Sign Up</p>
        <div className={styles.menuSignUp}>
            <div className={styles.individual}>
                <p>as Individual</p>
            </div>
            <div className={styles.organization}>
                <p>as Organization</p>
            </div>
        </div>
        <div className={styles.formGroup}>
            <label>Organization Name</label>
            <input type='text' placeholder='Organization Name' />
        </div>
        <div className={styles.formGroup}>
            <label>Field</label>
            <select name="" id="">
                <option value="">Business Field</option>
                <option value=""></option>
            </select>
        </div>
        <div className={styles.formGroup}>
            <label>Since</label>
            <input type='text' placeholder='January 1st, 1990' />
        </div>
        
        <div className={styles.formGroup}>
            <label>Owner Name</label>
            <input type='text' placeholder='Owner Name' />
        </div>
        <div className={styles.box2}>
            <button className={styles.btnCancel}>Cancel</button>
            <button className={styles.btnNext}>Next</button>
        </div>
        <div className={styles.box5}>
            <p>
                Already have an account? <a href='/login'>Sign In</a>
            </p>
        </div>

        </>

    );
};

export default Organization_1;