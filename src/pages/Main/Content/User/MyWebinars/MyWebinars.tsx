import { useState } from 'react';
import Sort from '../../../../../components/Sort/Sort';
import './myWebinars.scss';

import SortingType from '../../../../../utilities/enum/sort';
import WebinarTable from '../../../../../components/WebinarTable/WebinarTable';

const History = () => {
  const [sort, setSort] = useState<SortingType[keyof SortingType]>(
    SortingType.NAME
  );
  return (
    <div className='my-webinars-main-wrapper'>
      <h3>My Webinars</h3>
      <div className='my-webinars-content-wrapper'>
        <Sort
          active={sort}
          onClick={(sort: SortingType[keyof SortingType]) => setSort(sort)}
        />
        <WebinarTable />
      </div>
    </div>
  );
};

export default History;
