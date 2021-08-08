import styles from './individual_1.module.scss';

const Individual_1 = () => {
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
            <label>First Name</label>
            <input type='text' placeholder='John' />
        </div>
        <div className={styles.formGroup}>
            <label>Last Name</label>
            <input type='text' placeholder='Doe' />
        </div>
        <div className={styles.formGroup}>
            <label>Gender</label>
            <select name="" id="">
                <option value="">Male</option>
                <option value="">Female</option>
            </select>
        </div>
        <div className={styles.formGroup}>
            <label>Date of Birth</label>
            <input type='date' placeholder='January 1st, 1999' />
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

export default Individual_1;