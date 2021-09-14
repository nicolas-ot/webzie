import styles from './ratingBar.module.scss';
import variables from '../../../utilities/_variables.module.scss';

interface RatingBarProps {
  width: number;
  idx: number;
}
const RatingBar: React.FC<RatingBarProps> = ({ width, idx }) => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.RatingPoint}>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='min-content'
            viewBox='0 0 24 24'
            width='12px'
            fill={variables.orange}
          >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z' />
          </svg>
        </div>
        <span>{5 - idx}</span>
      </div>
      <div className={styles.barContainer}>
        <div
          style={{
            backgroundColor: '#FFC107',
            width: `${width}%`,
            height: '8px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default RatingBar;
