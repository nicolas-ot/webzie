import Slider from '../../../../../../elements/Slider/Slider';
import Webinar from './Webinar/Webinar';

import webinarData from '../../../../../../data/static/webinar_mock.js';

interface WebinarSliderProps {
  title: string;
  rows?: number;
}

const WebinarSlider: React.FC<WebinarSliderProps> = ({ title, rows }) => {
  const webinarComponents = webinarData.map((webinar) => <Webinar />);
  return (
    <div className='main-home-webinar-slider-wrapper'>
      <h3>{title}</h3>
      <div className='main-webinar-slider-wrapper'>
        <Slider rows={rows}>{webinarComponents}</Slider>
      </div>
    </div>
  );
};

export default WebinarSlider;
