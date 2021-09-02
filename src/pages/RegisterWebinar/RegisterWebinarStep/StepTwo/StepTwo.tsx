import styles from './StepTwo.module.scss';

import GroupForm from '../GroupForm/GroupFormFull';
import GroupFormHalf from '../GroupForm/GroupFormHalf';

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
              <GroupFormHalf titleLeft="" titleRight="" placeholderLeft="Webinar Speaker 1" placeholderRight="Webinar Speaker 2" type="normal" />
              <GroupFormHalf titleLeft="" titleRight="" placeholderLeft="Webinar Speaker 3" placeholderRight="Webinar Speaker 4" type="normal" />
              <GroupFormHalf titleLeft="" titleRight="" placeholderLeft="Webinar Speaker 3" placeholderRight="Webinar Speaker 4" type="halfNoLabel" />
            </div>  
          </div>

    )
}

export default StepTwo;