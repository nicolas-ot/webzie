import './statistic.scss';

import host from '../../../../../data/static/host-data.js';
import variables from '../../../../../utilities/_variables.module.scss';

import Rating from 'react-rating';
import RatingChart from '../../../../../elements/RatingChart/RatingChart';

const SVGIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='min-content'
      viewBox='0 0 24 24'
      width='16px'
      fill={variables.orange}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z' />
    </svg>
  );
};

const SVGIconEmpty = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='min-content'
      viewBox='0 0 24 24'
      width='16px'
      fill='#ccc'
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z' />
    </svg>
  );
};

const Statistic = () => {
  const stars = {
    oneStar: 0, // star t0e : total votes
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 50,
  };
  return (
    <div>
      <div className='host-statistic-wrapper'>
        <h3>Statistics</h3>
        <div className='host-statistic-content-wrapper'>
          <div className='host-statistic-profile-wrapper'>
            <div className='profile-image'>
              <img src={host.picture} alt='profile' />
            </div>{' '}
            <div className='profile-name'>{host.name}</div>
            <div className='profile-rating'>
              <span className='rating'>{`${host.rating}/5 `}</span>
              <span>{`(${host.ratingGiven})`}</span>
            </div>
            <div className='profile-rating-stars'>
              <Rating
                fractions={10}
                readonly
                initialRating={host.rating}
                emptySymbol={<SVGIconEmpty />}
                fullSymbol={<SVGIcon />}
              />
            </div>
            <div className='profile-rating-stars-chart'>
              <RatingChart stars={stars} />
            </div>
            <div className='profile-badges-wrapper'></div>
          </div>
          <div className='webinar-analysis-wrapper'>Webinar Analysis</div>
          <div className='data-analysis-wrapper'>Data Analysis</div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
