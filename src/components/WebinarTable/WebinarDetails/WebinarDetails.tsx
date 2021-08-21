import './webinarDetails.scss';

interface WebinarDetailsProps {
  poster: string;
  date: Date;
  time: string;
  category: string;
  host: string;
}

const WebinarDetails: React.FC<WebinarDetailsProps> = ({
  poster,
  date,
  time,
  category,
  host,
}) => {
  return (
    <>
      <img
        className='webinar-table-details-poster'
        src={poster}
        alt='poster'
      ></img>
      <div>1</div>
      {/* <div>{date}</div> */}
      <div>{time}</div>
      <div>{category}</div>
      <div>{host}</div>
    </>
  );
};

export default WebinarDetails;
