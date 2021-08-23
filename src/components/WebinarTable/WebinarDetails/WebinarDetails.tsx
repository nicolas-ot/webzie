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
  status?: string;
}

const WebinarDetails: React.FC<WebinarDetailsProps> = ({
  title,
  poster,
  date,
  time,
  category,
  host,
  status,
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
        <div className='title'>{title}</div>
      </div>
      <div className='column'>{dateformat(now, 'dddd, mmmm dd')}</div>
      <div className='column'>{time}</div>
      <div className='column category'>{category}</div>
      <div className='column'>{host}</div>
      {status && <div className='column'>{status}</div>}
      <div className='column buttons'>
        <div className='button-wrapper'>
          <Button backgroundColor='light-green' onClick={() => null}>
            Download
          </Button>
          <Button onClick={() => null}>View</Button>
        </div>
      </div>
    </div>
  );
};

export default WebinarDetails;
