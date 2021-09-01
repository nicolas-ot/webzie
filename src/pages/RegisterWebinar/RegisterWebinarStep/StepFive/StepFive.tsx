import styles from './StepFive.module.scss';

const StepFive = () =>{
    return(
        <div>
          <p>Let's Publish your Webinar!</p>
          <label htmlFor="">Publishing</label>
          <form>
            <div className={styles.GroupForm}>           
              <div className={styles.RadioBox}>
                <input type="radio" id="radio1" name="dataPublish" />
                <label htmlFor="">Publish</label>
              </div>
              <p>Make your Webinar published</p>
            </div>
            <div className={styles.GroupForm}>           
              <div className={styles.RadioBox}>
                <input type="radio" id="radio2" name="dataPublish" />
                <label htmlFor="">Unpublish</label>
              </div>
              <p>Make your Webinar unpublished for now</p>
            </div>
            <div className={styles.GroupForm}>           
              <div className={styles.RadioBox}>
                <input type="radio" id="radio3" name="dataPublish" />
                <label htmlFor="">Schedule</label>
              </div>
              <p>Schedule your Webinar publishing</p>
              <div className={styles.GroupForm2}>
                <div className={styles.GroupFormLeft}>
                  <label htmlFor="">Date</label>
                  <input type="text" placeholder="dd/mm/yy" />
                </div>
                <div className={styles.GroupFormRight}>
                  <label htmlFor="">Time</label>
                  <input type="text" placeholder="hh:mm" />
                </div>
              </div>
            </div>  
          </form>  
        </div>
    )
}

export default StepFive;