import styles from './StepThree.module.scss';

import SlideButton from '../SlideButton/SlideButton';
import MidSide from '../MidSide/MidSide';
import ImageUpload from '../ImageUpload/ImageUpload';


const StepThree = () =>{
    return(

        <>

            <p className={styles.TopicInformation}>Make your Webinar Poster!</p>
            <div className={styles.GroupForm2}>
              <div className={styles.GroupFormLeft}>
                <ImageUpload title="Poster" />
              </div>
              <MidSide />
              <div className={styles.GroupFormLeft}>
                <label>Poster Template</label>
                <div className={styles.TemplateBox}>
                  <div className={styles.Box}>
                    <SlideButton />
                    <div className={styles.RowTemplate}>
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
                    <div className={styles.RowTemplate}>
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
                    <div className={styles.RowTemplate}>
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
                    <div className={styles.RowTemplate}>
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
            </div>

        </>

    )
}

export default StepThree;