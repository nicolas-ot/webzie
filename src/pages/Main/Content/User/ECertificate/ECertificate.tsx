import { useState } from 'react';
import Sort from '../../../../../components/Sort/Sort';
import './eCertificate.scss';

import SortingType from '../../../../../utilities/enum/sort';

const ECertificate = () => {
  const [sort, setSort] = useState<SortingType[keyof SortingType]>(
    SortingType.NAME
  );
  return (
    <div className='e-certificate-main-wrapper'>
      <h3>E-Certificate</h3>
      <div className='e-certificate-content-wrapper'>
        <div className='e-certificate-sorting-wrapper'>
          <Sort
            active={sort}
            onClick={(sort: SortingType[keyof SortingType]) => setSort(sort)}
          />
        </div>
        <div className='e-certificate-list-wrapper'></div>
      </div>
    </div>
  );
};

export default ECertificate;
