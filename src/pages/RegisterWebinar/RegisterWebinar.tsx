import styles from './registerWebinar.module.scss';
import image from '../../assets/images/images/register-webinar.png';

import { useState } from 'react';
import ProgressBar from './ProgressBar/ProgressBar';
import Button from '../../elements/Button/Button';
import { useHistory } from 'react-router';

export enum Steps {
  STEP_1 = 1,
  STEP_2,
  STEP_3,
  STEP_4,
  STEP_5,
}

const RegisterWebinar = () => {
  const [step, setStep] = useState(1);
  const [forward, setForward] = useState(true);
  const history = useHistory();

  let buttons;

  const handleCancel = () => {
    history.push('/');
  };

  const handleSubmit = () => {
    history.push('/');
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
    setForward(true);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
    setForward(false);
  };

  switch (step) {
    case 1:
      buttons = (
        <>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleNext}>Next</Button>
        </>
      );
      break;
    case 5:
      buttons = (
        <>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </>
      );
      break;
    default:
      buttons = (
        <>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={handleNext}>Next</Button>
        </>
      );
      break;
  }
  // Edit swtich statement buat bikin formnya
  let form;

  switch (step) {
    case 1:
      form = (
        <div>
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
        </div>
      );
      break;
    case 2:
      form = (
        <div>
          <div>DESCRIPTION</div>
        </div>
      );
      break;
    case 3:
      form = (
        <div>
          <div>POSTER</div>
        </div>
      );
      break;
    case 4:
      form = (
        <div>
          <div>E-CERTIFICATE</div>
        </div>
      );
      break;
    default:
      form = (
        <div>
          <div>PUBLISHING</div>
        </div>
      );
      break;
  }

  return (
    <div>
      <ProgressBar step={step} forward={forward} />
      <div className={styles.RegisterWebinar}>
        <div className={styles.ImageContainer}>
          <img src={image} alt='register-webinar' />
        </div>
        <div>
          {form}
          <div className={styles.ButtonContainer}>{buttons}</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterWebinar;
