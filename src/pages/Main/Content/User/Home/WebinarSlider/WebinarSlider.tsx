import Slider from '../../../../../../elements/Slider/Slider';
import Webinar from './Webinar/Webinar';

import webinarData from '../../../../../../data/static/webinar_mock.js';

interface WebinarSliderProps {
  title: string;
  row?: number;
}

const WebinarSlider: React.FC<WebinarSliderProps> = ({ title, row }) => {
  const webinarComponents = webinarData.map((webinar) => <Webinar />);
  return (
    <div className='main-home-webinar-slider-wrapper'>
      <h3>{title}</h3>
      <div className='main-webinar-slider-wrapper'>
        <Slider>{webinarComponents}</Slider>
      </div>
    </div>
  );
};

export default WebinarSlider;
