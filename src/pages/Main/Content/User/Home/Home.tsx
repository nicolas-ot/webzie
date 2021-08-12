import './home.scss';
import Slider from '../../../../../elements/Slider/Slider';
import Webinar from './Webinar/Webinar';
import webinarData from '../../../../../data/static/webinar_mock.js';

const Home = () => {
  const WebinarList = webinarData.map((webinar) => (
    <Webinar
      title={webinar.title}
      date={webinar.date}
      time={webinar.time}
      host={webinar.host}
      image={webinar.poster}
    />
  ));
  return (
    <div className='slider-wrapper'>
      <Slider>{WebinarList}</Slider>
    </div>
  );
};

export default Home;
