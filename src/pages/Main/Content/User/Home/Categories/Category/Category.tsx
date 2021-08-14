import styles from './category.module.scss';

interface CategoryProps {
  title: string;
  img: string;
}

const Category: React.FC<CategoryProps> = ({ title, img }) => {
  return (
    <div className={styles.Category}>
      <div className={styles.Img}>
        <img src={img} alt='category' />
      </div>
      <h4 className={styles.Title}>{title}</h4>
    </div>
  );
};

export default Category;
