import './home.scss';
import UpcomingWebinar from '../../../../../components/UpcomingWebinar/UpcomingWebinar';
import TopPick from './TopPick/TopPick';
import WebinarSlider from './WebinarSlider/WebinarSlider';
import Categories from './Categories/Categories';

const Home = () => {
  return (
    <div className='user-main-home-wrapper'>
      <UpcomingWebinar />
      <TopPick />
      <WebinarSlider rows={2} title='Recommended for You' />
      <Categories />
      <WebinarSlider title='Newest Webinars' />
      <WebinarSlider title='Top Rated Webinars' />
    </div>
  );
};

export default Home;
