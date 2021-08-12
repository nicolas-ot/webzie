import './webinar.scss';

import dateformat from 'dateformat';
import { dateDiffInDays } from '../../../../../../utilities/utility';

interface WebinarProps {
  title: string;
  date: Date;
  time: string;
  host: string;
  image: string;
}

const Webinar: React.FC<WebinarProps> = ({
  title,
  date,
  time,
  host,
  image,
}) => {
  const today = new Date();
  const airDate = new Date();
  airDate.setDate(today.getDate() + 1);

  return (
    <div className='webinar-wrapper'>
      <div className='webinar-image-wrapper'>
        <img
          // src={
          //   require('../../../../../../assets/images/poster_webinar/poster-architect.jpg')
          //     .default
          // }
          src={image}
          alt=''
        />
      </div>
      <div className='webinar-content-wrapper'>
        <h5 className='webinar-title'>{title}</h5>
        <div className='webinar-date webinar-detail'>
          {dateformat(airDate, 'dddd, mmmm dd')}
        </div>
        <div className='webinar-time webinar-detail'>{time}</div>
        <div className='webinar-host webinar-detail'>{host}</div>
        <div className='webinar-time-left webinar-detail'>
          {'in ' + dateDiffInDays(today, airDate) + ' day'}
        </div>
        <div className='webinar-button-wrapper'></div>
      </div>
    </div>
  );
};

export default Webinar;
