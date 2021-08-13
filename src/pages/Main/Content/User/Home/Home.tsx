import './home.scss';
import UpcomingWebinar from '../../../../../components/UpcomingWebinar/UpcomingWebinar';
import TopPick from './TopPick/TopPick';

const Home = () => {
  return (
    <div className='user-main-home-wrapper'>
      <UpcomingWebinar />
      <TopPick />
    </div>
  );
};

export default Home;
