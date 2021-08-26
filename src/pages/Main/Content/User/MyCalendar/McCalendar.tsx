import './myCalendar.scss';
import Calendar from './Calendar/Calendar';
import webinarData from '../../../../../data/static/webinar_mock.js';
import Webinar from '../../../../../components/UpcomingWebinar/Webinar/Webinar';

const MyCalendar = () => {
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
    <div className='my-calendar-wrapper'>
      <div className='calendar-wrapper'>
        <Calendar />
      </div>

      <div className='upcoming-webinar-wrapper'>
        <h3>Upcoming Webinar</h3>
        <div className='upcoming-webinar'>{WebinarList}</div>
      </div>
    </div>
  );
};

export default MyCalendar;
