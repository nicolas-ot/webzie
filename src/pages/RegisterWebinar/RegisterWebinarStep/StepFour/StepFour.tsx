import styles from './StepFour.module.scss';

import SlideButton from '../SlideButton/SlideButton';
import MidSide from '../MidSide/MidSide';
import ImageUpload from '../ImageUpload/ImageUpload';

const StepFour = () =>{
    return(

        <>

            <p className={styles.TopicInformation}>Make your Webinar E-Sertificate!</p>
            <div className={styles.GroupForm2}>
              <div className={styles.GroupFormLeft}>
                <ImageUpload title="E-Certificate" />
              </div>
              <MidSide />
              <div className={styles.GroupFormRight}>
                <label className={styles.TemplateCertificate}>E-Certificate Template</label>
                <div className={styles.TemplateBox}>
                  <div className={styles.Box}>
                    <SlideButton />
                    <div className={styles.ImageTemplate}>
                      <img src={
                          require('../../../../assets/images/poster_webinar/poster-architect.jpg')
                          .default} 
                          alt="poster_webinar" />
                    </div>
                    <div className={styles.ImageTemplate}>
                      <img src={
                          require('../../../../assets/images/poster_webinar/poster-architect.jpg')
                          .default} 
                          alt="poster_webinar" />
                    </div>
                    <div className={styles.ImageTemplate}>
                      <img src={
                          require('../../../../assets/images/poster_webinar/poster-architect.jpg')
                          .default} 
                          alt="poster_webinar" />
                    </div>
                    <div className={styles.ImageTemplate}>
                      <img src={
                          require('../../../../assets/images/poster_webinar/poster-architect.jpg')
                          .default} 
                          alt="poster_webinar" />
                    </div>
                    <div className={styles.ImageTemplate}>
                      <img src={
                          require('../../../../assets/images/poster_webinar/poster-architect.jpg')
                          .default} 
                          alt="poster_webinar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </>

    )
}

export default StepFour;