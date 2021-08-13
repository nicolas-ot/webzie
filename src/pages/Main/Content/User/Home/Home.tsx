import './home.scss';
import UpcomingWebinar from '../../../../../components/UpcomingWebinar/UpcomingWebinar';
import TopPick from './TopPick/TopPick';
import WebinarSlider from './WebinarSlider/WebinarSlider';

const Home = () => {
  return (
    <div className='user-main-home-wrapper'>
      <UpcomingWebinar />
      <TopPick />
      <WebinarSlider title='Recommended for You' />
    </div>
  );
};

export default Home;
