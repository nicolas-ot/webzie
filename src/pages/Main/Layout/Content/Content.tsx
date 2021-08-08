import './content.scss';
import { useTypedSelector } from '../../../../hooks/use-typed-selector';

// user
import Badges from './User/Badges/Badges';
import UserHome from './User/Home/Home';
import MyCalendar from './User/MyCalendar/McCalendar';
import MyWebinar from './User/MyWebinars/MyWebinar';
import UserHistory from './User/History/History';

// host
import HostHome from './Host/Home/Home';
import Statistic from './Host/Statistic/Statistic';
import SurveyForm from './Host/SurveyForm/SurveyForm';
import Wallet from './Host/Wallet/Wallet';
import ECertificate from './User/ECertificate/ECertificate';
import HostHistory from './Host/History/History';

interface ContentProps {
  activePage: string;
}

const Content: React.FC<ContentProps> = ({ activePage }) => {
  const mode = useTypedSelector((state) => state.modes.mode);

  console.log(activePage);

  const renderUserMainPage = () => {
    switch (activePage) {
      case 'Home':
        return <UserHome />;
      case 'My Calendar':
        return <MyCalendar />;
      case 'Badges':
        return <Badges />;
      case 'My Webinars':
        return <MyWebinar />;
      case 'E-Certificate':
        return <ECertificate />;
      case 'History':
        return <UserHistory />;
    }
  };

  const renderHostMainPage = () => {
    switch (activePage) {
      case 'Home':
        return <HostHome />;
      case 'Statistic':
        return <Statistic />;
      case 'Survey Form':
        return <SurveyForm />;
      case 'Wallet':
        return <Wallet />;
      case 'History':
        return <HostHistory />;
    }
  };

  return (
    <div className='main-content-wrapper'>
      {mode === 'user' ? renderUserMainPage() : renderHostMainPage()}
    </div>
  );
};

export default Content;
