import styles from './individual_2.module.scss';

const Individual_2 = () =>{
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
            <label>Email Address</label>
            <input type='email' placeholder='Your email' />
        </div>
        <div className={styles.formGroup}>
            <label>Username</label>
            <input type='text' placeholder='Your username' />
        </div>
        <div className={styles.formGroup}>
            <label>Password</label>
            <input type='password' placeholder='******' />
        </div>
        <div className={styles.formGroup}>
            <label>Confirm Password</label>
            <input type='password' placeholder='******' />
        </div>
        <div className={styles.box2}>
            <button className={styles.btnCancel}>Back</button>
            <button className={styles.btnNext}>Next</button>
        </div>

        </>

    );
};

export default Individual_2;