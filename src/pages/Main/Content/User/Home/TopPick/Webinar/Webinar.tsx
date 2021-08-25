import dateformat from 'dateformat';
import poster from '../../../../../../../assets/images/poster_webinar/poster-covid.jpg';
import webinar from '../../../../../../../data/static/webinar_mock.js';
import Button from '../../../../../../../elements/Button/Button';

import './webinar.scss';
import Share from '../../../../../../../elements/Share/Share';

const Webinar = () => {
  const topWebinar = webinar[5];
  return (
    <div className='webinar-top-pick-wrapper'>
      <div className='webinar-top-pick-image-wrapper'>
        <img src={poster} alt='webinar-poster' />
      </div>
      <div className='webinar-top-pick-content-wrapper'>
        <div className='webinar-top-pick-data-wrapper'>
          <h2 className='top-pick-webinar-title'>{topWebinar.title}</h2>
          <span className='top-pick-webinar-price'>
            {Intl.NumberFormat('en-ID', {
              style: 'currency',
              currency: 'IDR',
            }).format(topWebinar.price)}
          </span>
          <div className='top-pick-webinar-details'>
            <div className='details-column'>
              <div className='details-row date'>
                {dateformat(topWebinar.date.getDate(), 'dddd, mmmm dd')}
              </div>
              <div className='details-row time'>{topWebinar.time}</div>
              <div className='details-row host'>{topWebinar.host}</div>
            </div>
            <div className='details-column right-column'>
              <div className='details-row seats-available'>
                {topWebinar.attendee - topWebinar.tickets_bought > 0
                  ? 'seats available'
                  : 'seats not available'}
              </div>
              <div className='details-row e-certificate'>
                {topWebinar.EC ? 'EC available' : 'no EC'}
              </div>
              {/* DB: need host rating and rating given */}
              <div className='details-row rating'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='20px'
                  viewBox='0 0 24 24'
                  width='20px'
                  fill='orange'
                >
                  <path d='M0 0h24v24H0z' fill='none' />
                  <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z' />
                </svg>
                <span>{topWebinar.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='webinar-top-pick-most-left'>
          <div className='webinar-top-pick-buttons-wrapper'>
            <Button backgroundColor={'light-green'} onClick={() => null}>
              <span>Register</span>
            </Button>
            <Button onClick={() => null}>
              <span>Add to Cart</span>
            </Button>
            <Button onClick={() => null}>
              <span>More</span>
            </Button>
          </div>
          <Share size='big' />
        </div>
      </div>
    </div>
  );
};

export default Webinar;
