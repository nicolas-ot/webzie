import UpcomingWebinar from '../../../../../components/UpcomingWebinar/UpcomingWebinar';
import WebinarTable from '../../../../../components/WebinarTable/WebinarTable';

const Home = () => {
  return (
    <div>
      <UpcomingWebinar />
      <WebinarTable title='Your Webinars' />
    </div>
  );
};

export default Home;
