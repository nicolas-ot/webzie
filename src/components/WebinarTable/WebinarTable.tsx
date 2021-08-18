import SearchBar from '../../elements/SearchBar/SearchBar';
import WebinarDetails from './WebinarDetails/WebinarDetails';

const WebinarTable = () => {
  return (
    <div className='e-certificate-list-wrapper'>
      <SearchBar />
      <div className='e-certificate-details-wrapper'>
        <WebinarDetails />
      </div>
    </div>
  );
};

export default WebinarTable;
