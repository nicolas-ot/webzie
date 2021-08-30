import { useRef } from 'react';
import './progressBar.scss';

import { Steps } from '../RegisterWebinar';
import { useEffect } from 'react';

interface ProgressBarProps {
  step: number;
  forward: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step, forward }) => {
  const step1 = useRef<HTMLDivElement>(null);
  const step2 = useRef<HTMLDivElement>(null);
  const step3 = useRef<HTMLDivElement>(null);
  const step4 = useRef<HTMLDivElement>(null);
  const step5 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (
      step1.current &&
      step2.current &&
      step3.current &&
      step4.current &&
      step5.current
    ) {
      if (step === Steps.STEP_1 && forward) {
        step1.current.classList.add('is-active');
      } else if (step === Steps.STEP_2 && forward) {
        step1.current.classList.remove('is-active');
        step1.current.classList.add('is-complete');
        step1.current.classList.remove('is-not-complete');
        step2.current.classList.add('is-active');
      } else if (step === Steps.STEP_3 && forward) {
        step2.current.classList.remove('is-active');
        step2.current.classList.add('is-complete');
        step2.current.classList.remove('is-not-complete');
        step3.current.classList.add('is-active');
      } else if (step === Steps.STEP_4 && forward) {
        step3.current.classList.remove('is-active');
        step3.current.classList.add('is-complete');
        step3.current.classList.remove('is-not-complete');
        step4.current.classList.add('is-active');

        // step4.current.classList.add('is-not-complete');
        // step4.current.classList.remove('is-complete');
        // step5.current.classList.remove('is-active');
      } else if (step === Steps.STEP_5 && forward) {
        step4.current.classList.remove('is-active');
        step4.current.classList.add('is-complete');
        step4.current.classList.remove('is-not-complete');
        step5.current.classList.add('is-active');
      } else if (step === Steps.STEP_1 && !forward) {
        step1.current.classList.add('is-active');
        step1.current.classList.add('is-not-complete');
        step1.current.classList.remove('is-complete');
        step2.current.classList.remove('is-not-complete');
        step2.current.classList.remove('is-active');
      } else if (step === Steps.STEP_2 && !forward) {
        step2.current.classList.add('is-active');
        step2.current.classList.add('is-not-complete');
        step2.current.classList.remove('is-complete');
        step3.current.classList.remove('is-not-complete');
        step3.current.classList.remove('is-active');
      } else if (step === Steps.STEP_3 && !forward) {
        step3.current.classList.add('is-active');
        step3.current.classList.add('is-not-complete');
        step3.current.classList.remove('is-complete');
        step4.current.classList.remove('is-not-complete');
        step4.current.classList.remove('is-active');
      } else if (step === Steps.STEP_4 && !forward) {
        step4.current.classList.add('is-active');
        step4.current.classList.add('is-not-complete');
        step4.current.classList.remove('is-complete');
        step5.current.classList.remove('is-active');
      }
    }
  }, [step, forward]);
  return (
    <div>
      <div className='progress'>
        <div className='progress-track'></div>

        <div id='step1' className='progress-step' ref={step1}>
          Information
        </div>

        <div id='step2' ref={step2} className='progress-step'>
          Description
        </div>

        <div id='step3' ref={step3} className='progress-step'>
          Poster
        </div>

        <div id='step4' ref={step4} className='progress-step'>
          E-Certificate
        </div>

        <div id='step5' ref={step5} className='progress-step'>
          Publishing
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
