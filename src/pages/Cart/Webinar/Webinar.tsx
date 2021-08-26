import styles from './webinar.module.scss';

interface WebinarProps {
  poster: string;
  title: string;
  host: string;
  price: string;
}

const Webinar: React.FC<WebinarProps> = ({ poster, title, host, price }) => {
  return (
    <div className={styles.webinar_list}>
      <div className={styles.webinar_image}>
        <input type='checkbox' />
        <img src={poster} alt='poster' />
      </div>
      <div className={styles.webinar_information}>
        <div className={styles.information_left}>
          <h3>{title}</h3>
          <p>{host}</p>
        </div>
        <div className={styles.information_right}>
          <h1>{price}</h1>
          <div className={styles.image}>
            <img
              src={
                require('../../../assets/images/icon_svg/delete_black_48dp.svg')
                  .default
              }
              alt='trash'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
