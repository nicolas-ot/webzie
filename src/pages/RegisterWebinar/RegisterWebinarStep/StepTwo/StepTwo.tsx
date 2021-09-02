import styles from './StepTwo.module.scss';

const StepTwo = () =>{
    return(
      
          <div className={styles.step}>
            <p className={styles.TopicInformation}>Tell us about your webinar!</p>
            <div className={styles.GroupForm}>
              <label htmlFor="">Description</label>
              <textarea className={styles.InputDescription} placeholder="Describe your webinar"></textarea>
            </div>
            <div className={styles.GroupForm}>           
              <label htmlFor="">Speaker Name</label>
              <div className={styles.GroupForm2}>
                <div className={styles.GroupFormLeft}>
                  <input type="text" placeholder="Webinar speaker 1" />
                </div>
                <div className={styles.GroupFormRight}>
                  <label htmlFor=""></label>
                  <input type="text" placeholder="Webinar speaker 2" />
                </div>
              </div>
              <div className={styles.GroupForm2}>
                <div className={styles.GroupFormLeft}>
                  <input type="text" placeholder="Webinar speaker 3" />
                </div>
                <div className={styles.GroupFormRight}>
                  <label htmlFor=""></label>
                  <input type="text" placeholder="Webinar speaker 4" />
                </div>
              </div>
              <div className={styles.GroupForm2}>
                <div className={styles.GroupFormLeft}>
                  <input type="text" placeholder="Webinar speaker 5" />
                </div>
              </div>
            </div>  
          </div>

    )
}

export default StepTwo;