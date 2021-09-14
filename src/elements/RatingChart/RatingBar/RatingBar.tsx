import styles from './ratingBar.module.scss';

interface RatingBarProps {
  width: number;
  idx: number;
}
const RatingBar: React.FC<RatingBarProps> = ({ width, idx }) => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.h3}>{5 - idx}</div>
      <div className={styles.barContainer}>
        <div
          style={{
            backgroundColor: '#FFC107',
            width: `${width}%`,
            height: '10px',
          }}
        ></div>
      </div>
    </div>
  );
};

export default RatingBar;
