import './categories.module.scss';

import categories from '../../../../../../data/static/category.js';

import Slider from '../../../../../../elements/Slider/Slider';
import Category from './Category/Category';
import image from '../../../../../../assets/images/categories/design.jpg';

const Categories = () => {
  const categoriesComponent = categories.map((category) => (
    <Category title={category.title} img={category.image} />
  ));
  return (
    <div>
      <h3>Discover by Topics</h3>
      <Slider rows={2}>{categoriesComponent}</Slider>
    </div>
  );
};

export default Categories;
