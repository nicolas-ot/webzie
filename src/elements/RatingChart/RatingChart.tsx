import styles from './ratingChart.module.scss';

import RatingBar from './RatingBar/RatingBar';

interface RatingChartProps {
  stars: Rating;
}

type Rating = {
  oneStar: number;
  twoStar: number;
  threeStar: number;
  fourStar: number;
  fiveStar: number;
};

const RatingChart: React.FC<RatingChartProps> = ({ stars }) => {
  // const barCHar = stars.map();
  const barLength = (data: number) => {
    return (
      (data * 100) /
      (stars.oneStar +
        stars.twoStar +
        stars.threeStar +
        stars.fourStar +
        stars.fiveStar)
    );
  };
  let barCharts = Object.values(stars).map((star, idx) => (
    <RatingBar width={barLength(star)} idx={idx} />
  ));

  return (
    <div className={styles.container}>
      <div>{barCharts}</div>
    </div>
  );
};

export default RatingChart;
