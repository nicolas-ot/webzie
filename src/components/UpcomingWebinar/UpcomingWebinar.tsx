import './upcomingWebinar.scss';
import Slider from '../../elements/Slider/Slider';
import Webinar from './Webinar/Webinar';
import webinarData from '../../data/static/webinar_mock.js';

const UpcomingWebinar = () => {
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
    <div className='user-home-wrapper'>
      <div className='user-home-upcoming'>
        <h3>Upcoming Webinar for You</h3>
        <div className='slider-wrapper'>
          <Slider>{WebinarList}</Slider>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinar;
