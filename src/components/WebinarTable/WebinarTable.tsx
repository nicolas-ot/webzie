import './webinarTable.scss';

import SearchBar from '../../elements/SearchBar/SearchBar';
import WebinarDetails from './WebinarDetails/WebinarDetails';

import webinarData from '../../data/static/webinar_mock.js';

const WebinarTable = () => {
  const webinarDetailsComponent = webinarData.map((webinar) => (
    <WebinarDetails
      poster={webinar.poster}
      date={webinar.date}
      host={webinar.host}
      time={webinar.time}
      category={webinar.category}
    />
  ));
  return (
    <div className='webinar-table-wrapper'>
      <SearchBar withResult={false} />
      <div className='webinar-table-information-wrapper'>
        <h6>Name</h6>
        <h6>Date</h6>
        <h6>Time</h6>
        <h6>Category</h6>
        <h6>Host</h6>
        {webinarDetailsComponent}
      </div>
    </div>
  );
};

export default WebinarTable;
