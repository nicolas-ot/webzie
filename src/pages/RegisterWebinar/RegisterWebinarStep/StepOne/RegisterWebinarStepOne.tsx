import styles from './registerWebinarStepOne.module.scss';

const RegisterWebinarStepOne = () =>{
    return(

        <>

        <div className={styles.BoxInformation}>
            <p>Tell us about your webinar!</p>
            <div className={styles.GroupForm}>
              <label htmlFor="">Title</label>
              <input type="text" placeholder="Webinar Title" />
            </div>
            <div className={styles.GroupForm2}>
              <div className={styles.GroupFormLeft}>
                <label htmlFor="">Date</label>
                <input type="text" placeholder="dd/mm/yy" />
              </div>
              <div className={styles.GroupFormRight}>
                <label htmlFor="">Time</label>
                <div className={styles.TimeStartEnd}>
                  <input type="text" placeholder="hh:mm" />
                  <p>-</p>
                  <input type="text" placeholder="hh:mm" />
                </div>
              </div>
            </div>    
            <div className={styles.GroupForm2}>
              <div className={styles.GroupFormLeft}>
                <label htmlFor="">Platform</label>
                <input type="text" placeholder="Platform" />
              </div>
              <div className={styles.GroupFormRight}>
                <label htmlFor="">Attendee</label>
                <input type="text" placeholder="Amount of Attenden" />
              </div>
            </div>
            <div className={styles.GroupForm}>
              <label htmlFor="">Link</label>
              <input type="text" placeholder="Webinar Link" />
            </div>    
            <div className={styles.GroupForm2}>
              <div className={styles.GroupFormLeft}>
                <label htmlFor="">Entrance Fee</label>
                <input type="text" placeholder="Fee" />
              </div>
              <div className={styles.GroupFormRight}>
                <label htmlFor="">Category</label>
                <input type="text" placeholder="Webinar Category" />
              </div>
            </div>
            <div className={styles.checkbox}>
              <div>
                <input type="checkbox" />
                <p>This website is free</p>
              </div>
            </div>
          </div>

        </>

    )
}

export default RegisterWebinarStepOne;