import styles from './registerWebinarStepThree.module.scss';

import Button from '../../../../elements/Button/Button';


const RegisterWebinarStepThree = () =>{
    return(

        <>

          <div className={styles.BoxInformation}>
            <p>Make your Webinar Poster!</p>
            <div className={styles.GroupForm2}>
              <div className={styles.GroupFormLeft}>
                <label>Webinar Poster</label>
                <div className={styles.ImageForm}></div>
                <Button className={styles.ButtonImage}>Upload Webinar Poster</Button>
                <p>For Poster guideline. <a href="#">download here</a></p>
              </div>
              <div className={styles.GroupFormMid}>
                <div className={styles.hr}>
                  <hr />
                </div>
                <p>OR</p>
                <div className={styles.hr}>
                  <hr />
                </div>
              </div>
              <div className={styles.GroupFormLeft}>
                <label>Poster Template</label>
                <div className={styles.TemplateBox}>
                  <div className={styles.Box}>
                  <div className={styles.leftBtn}>
                     <img src={require('../../../../assets/images/icon_svg/arrow_drop_down.svg').default}
                     alt="arrow" width="70%" />
                  </div>
                  <div className={styles.rightBtn}>
                      <img src={require('../../../../assets/images/icon_svg/arrow_drop_down.svg').default}
                      alt="arrow" width="70%" />
                  </div>
                    <div className={styles.RowTemplate}>
                      <div className={styles.ImageTemplate}>
                        <img src={
                            require('../../../../assets/images/poster_webinar/poster-architect.jpg').
                            default} 
                            alt="poster_webinar" />
                      </div>
                      <div className={styles.ImageTemplate}>
                        <img src={
                            require('../../../../assets/images/poster_webinar/poster-architect.jpg').
                            default} 
                            alt="poster_webinar" />
                      </div>
                    </div>
                    <div className={styles.RowTemplate}>
                      <div className={styles.ImageTemplate}>
                        <img src={
                            require('../../../../assets/images/poster_webinar/poster-architect.jpg').
                            default} 
                            alt="poster_webinar" />
                      </div>
                      <div className={styles.ImageTemplate}>
                        <img src={
                            require('../../../../assets/images/poster_webinar/poster-architect.jpg').
                            default} 
                            alt="poster_webinar" />
                      </div>
                    </div>
                    <div className={styles.RowTemplate}>
                      <div className={styles.ImageTemplate}>
                        <img src={
                            require('../../../../assets/images/poster_webinar/poster-architect.jpg').
                            default} 
                            alt="poster_webinar" />
                      </div>
                      <div className={styles.ImageTemplate}>
                        <img src={
                            require('../../../../assets/images/poster_webinar/poster-architect.jpg').
                            default} 
                            alt="poster_webinar" />
                      </div>
                    </div>
                    <div className={styles.RowTemplate}>
                      <div className={styles.ImageTemplate}>
                        <img src={
                            require('../../../../assets/images/poster_webinar/poster-architect.jpg').
                            default} 
                            alt="poster_webinar" />
                      </div>
                      <div className={styles.ImageTemplate}>
                        <img src={
                            require('../../../../assets/images/poster_webinar/poster-architect.jpg').
                            default} 
                            alt="poster_webinar" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>

    )
}

export default RegisterWebinarStepThree;