import './sort.scss';
import SortingType from '../../utilities/enum/sort';

type ValueOfSortingType = SortingType[keyof SortingType];
interface SortProps {
  active: ValueOfSortingType;
  onClick: (active: ValueOfSortingType) => void;
}

const Sort: React.FC<SortProps> = ({ active, onClick }) => {
  return (
    <div className='data-sorting-possibilities-wrapper'>
      <h5>Sort</h5>
      <ul
        onChange={(event) => console.log(event)}
        className='sorting-list-wrapper'
      >
        {(Object.values(SortingType) as Array<ValueOfSortingType>).map(
          (sort) => (
            <li
              className={'sorting-choice' + (active === sort ? ' active' : '')}
              onClick={() => onClick(sort)}
            >
              {'By ' + sort}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Sort;
