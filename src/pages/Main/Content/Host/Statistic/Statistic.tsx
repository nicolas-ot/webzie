import './statistic.scss';

import Profile from './Profile/Profile';
import WebinarAnalysis from './WebinarAnalysis/WebinarAnalysis';

const Statistic = () => {
  return (
    <div>
      <div className='host-statistic-wrapper'>
        <h3>Statistics</h3>
        <div className='host-statistic-content-wrapper'>
          <Profile />
          <WebinarAnalysis />
          <div className='data-analysis-wrapper'>Data Analysis</div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
