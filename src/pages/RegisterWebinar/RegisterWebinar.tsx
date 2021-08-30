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
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
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
  return (
    <div>
      <ProgressBar step={step} />
      <div className={styles.RegisterWebinar}>
        <div className={styles.ImageContainer}>
          <img src={image} alt='register-webinar' />
        </div>
        <div>
          {/* form */}
          <div className={styles.ButtonContainer}>{buttons}</div>
        </div>
      </div>
    </div>
  );
};

export default RegisterWebinar;
