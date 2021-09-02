import styles from './StepOne.module.scss';

import GroupForm from '../GroupForm/GroupFormFull';
import GroupFormHalf from '../GroupForm/GroupFormHalf';

const StepOne = () =>{
    return(

        <>
          <div className={styles.step}>
            <p className={styles.TopicInformation}>Tell us about your webinar!</p>
            <GroupForm title="Title" placeholder="Webinar Title" />
            <GroupFormHalf titleLeft="Date" titleRight="Time" placeholderLeft="" placeholderRight="" type="time"/>    
            <GroupFormHalf titleLeft="Platform" titleRight="Attendee" placeholderLeft="Webinar Platform" placeholderRight="Amount of Attendee" type="normal"/>    
            <GroupForm title="Link" placeholder="Webinar Link" />    
            <GroupFormHalf titleLeft="Entrance Fee" titleRight="Category" placeholderLeft="Fee" placeholderRight="Webinar Category" type="normal"/>    
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

export default StepOne;