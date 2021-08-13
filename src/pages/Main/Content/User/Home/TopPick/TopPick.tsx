import './topPick.scss';

import Webinar from './Webinar/Webinar';

const TopPick = () => {
  return (
    <div className='user-home-top-pick-wrapper'>
      <h3>Top Pick for You</h3>
      <Webinar />
    </div>
  );
};

export default TopPick;
