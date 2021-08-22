import './webinarDetails.scss';
import dateformat from 'dateformat';
import Button from '../../../elements/Button/Button';

interface WebinarDetailsProps {
  poster: string;
  date: Date;
  time: string;
  category: string;
  host: string;
  title: string;
}

const WebinarDetails: React.FC<WebinarDetailsProps> = ({
  title,
  poster,
  date,
  time,
  category,
  host,
}) => {
  const now = new Date();
  return (
    <div className='webinar-table-details-wrapper row'>
      <div className='image-and-title column'>
        <img
          className='webinar-table-details-poster'
          src={poster}
          alt='poster'
        ></img>
        <div className='title'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste, ex.
        </div>
      </div>
      <div className='column'>{dateformat(now, 'dddd, mmmm dd')}</div>
      <div className='column'>{time}</div>
      <div className='column category'>{category}</div>
      <div className='column'>{host}</div>
      <div className='button-wrapper'>
        <Button onClick={() => null}>Download</Button>
        <Button onClick={() => null}>View</Button>
      </div>
    </div>
  );
};

export default WebinarDetails;
