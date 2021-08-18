import { useState } from 'react';
import Sort from '../../../../../components/Sort/Sort';
import './eCertificate.scss';

import SortingType from '../../../../../utilities/enum/sort';
import WebinarTable from '../../../../../components/WebinarTable/WebinarTable';

const ECertificate = () => {
  const [sort, setSort] = useState<SortingType[keyof SortingType]>(
    SortingType.NAME
  );
  return (
    <div className='e-certificate-main-wrapper'>
      <h3>E-Certificate</h3>
      <div className='e-certificate-content-wrapper'>
        <Sort
          active={sort}
          onClick={(sort: SortingType[keyof SortingType]) => setSort(sort)}
        />
        <WebinarTable />
      </div>
    </div>
  );
};

export default ECertificate;
