import './home.scss';
import Slider from '../../../../../elements/Slider/Slider';
import Webinar from '../../../../../components/UpcomingWebinar/Webinar/Webinar';
import webinarData from '../../../../../data/static/webinar_mock.js';
import UpcomingWebinar from '../../../../../components/UpcomingWebinar/UpcomingWebinar';

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
  return <UpcomingWebinar></UpcomingWebinar>;
};

export default Home;
