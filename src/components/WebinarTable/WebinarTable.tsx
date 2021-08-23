import './webinarTable.scss';

import SearchBar from '../../elements/SearchBar/SearchBar';
import WebinarDetails from './WebinarDetails/WebinarDetails';

import webinarData from '../../data/static/webinar_mock.js';

interface WebinarTableProps {
  myWebinars?: boolean;
}

const WebinarTable: React.FC<WebinarTableProps> = ({ myWebinars }) => {
  const webinarDetailsComponent = webinarData.map((webinar) => (
    <WebinarDetails
      title={webinar.title}
      poster={webinar.poster}
      date={webinar.date}
      host={webinar.host}
      time={webinar.time}
      category={webinar.category}
      status={myWebinars ? webinar.status : undefined}
    />
  ));
  return (
    <div className='webinar-table-wrapper'>
      <SearchBar withResult={false} />
      <div className='webinar-table-overflow'>
        <div className='webinar-table-information-wrapper'>
          <div className='table-header row'>
            <h6 className='column name'>Name</h6>
            <h6 className='column'>Date</h6>
            <h6 className='column'>Time</h6>
            <h6 className='column'>Category</h6>
            <h6 className='column'>Host</h6>
            {myWebinars && <h6 className='column'>Status</h6>}
          </div>
          {webinarDetailsComponent}
        </div>
      </div>
    </div>
  );
};

export default WebinarTable;
