import { useRef } from 'react';
import './progressBar.scss';
const ProgressBar = () => {
  const step1 = useRef<HTMLDivElement>(null);
  const step2 = useRef<HTMLDivElement>(null);
  const step3 = useRef<HTMLDivElement>(null);
  const step4 = useRef<HTMLDivElement>(null);
  let step = 'step1';

  setTimeout(() => console.log(step1), 5000);

  function next() {
    if (step1.current && step2.current && step3.current && step4.current) {
      if (step === 'step1') {
        step = 'step2';
        step1.current.classList.remove('is-active');
        step1.current.classList.add('is-complete');
        step2.current.classList.add('is-active');
      } else if (step === 'step2') {
        step = 'step3';
        step2.current.classList.remove('is-active');
        step2.current.classList.add('is-complete');
        step3.current.classList.add('is-active');
      } else if (step === 'step3') {
        step = 'step4d';
        step3.current.classList.remove('is-active');
        step3.current.classList.add('is-complete');
        step4.current.classList.add('is-active');
      } else if (step === 'step4d') {
        step = 'complete';
        step4.current.classList.remove('is-active');
        step4.current.classList.add('is-complete');
      } else if (step === 'complete') {
        step = 'step1';
        step4.current.classList.remove('is-complete');
        step3.current.classList.remove('is-complete');
        step2.current.classList.remove('is-complete');
        step1.current.classList.remove('is-complete');
        step1.current.classList.add('is-active');
      }
    }
  }
  return (
    <div>
      <div className='progress'>
        <div className='progress-track'></div>

        <div id='step1' className='progress-step' ref={step1}>
          Step One
        </div>

        <div id='step2' ref={step2} className='progress-step'>
          Step Two
        </div>

        <div id='step3' ref={step3} className='progress-step'>
          Step Three
        </div>

        <div id='step4' ref={step4} className='progress-step'>
          Complete
        </div>
      </div>

      <button onClick={() => next()}>Next Step</button>
    </div>
  );
};

export default ProgressBar;
