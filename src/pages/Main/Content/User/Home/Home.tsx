import './home.scss';
import Categories from './Categories/Categories';
import TopPick from './TopPick/TopPick';
import UpcomingWebinar from '../../../../../components/UpcomingWebinar/UpcomingWebinar';
import WebinarSlider from './WebinarSlider/WebinarSlider';

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
