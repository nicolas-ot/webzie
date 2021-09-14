import './webinarTable.scss';

import SearchBar from '../../elements/SearchBar/SearchBar';
import WebinarDetails from './WebinarDetails/WebinarDetails';

import webinarData from '../../data/static/webinar_mock.js';
import Sort from '../Sort/Sort';
import { useState } from 'react';
import SortingType from '../../utilities/enum/sort';

interface WebinarTableProps {
  myWebinars?: boolean;
  title: string;
}

type ValueOfSortingType = SortingType[keyof SortingType];

const WebinarTable: React.FC<WebinarTableProps> = ({ myWebinars, title }) => {
  const [activeSort, setActiveSort] = useState<ValueOfSortingType>(
    SortingType.NAME
  );

  const webinarDetailsComponent = webinarData.map((webinar) => (
    <WebinarDetails
      title={webinar.title}
      poster={webinar.poster}
      date={webinar.date}
      host={webinar.host}
      time={webinar.time}
      category={webinar.category}
      status={myWebinars ? webinar.status : undefined}
    />
  ));
  return (
    <div>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <div className='webinar-table-sort-wrapper'>
        <Sort
          active={activeSort}
          onClick={(option: ValueOfSortingType) => setActiveSort(option)}
        />
        <div className='webinar-table-wrapper'>
          <SearchBar withResult={false} />
          <div className='webinar-table-overflow'>
            <div className='webinar-table-information-wrapper'>
              <thead>
                <div className='table-header row'>
                  <h6 className='column name'>Name</h6>
                  <h6 className='column'>Date</h6>
                  <h6 className='column'>Time</h6>
                  <h6 className='column'>Category</h6>
                  <h6 className='column'>Host</h6>
                  {myWebinars && <h6 className='column'>Status</h6>}
                  <h6 className='column button'>Button</h6>
                </div>
              </thead>
              <tbody>{webinarDetailsComponent}</tbody>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarTable;
