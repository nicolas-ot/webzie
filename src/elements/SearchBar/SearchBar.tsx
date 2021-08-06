import { useState } from 'react';
import { useEffect } from 'react';
import './searhBar.scss';

interface SearchBarProps {
  width?: string;
}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [input, setInput] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(input);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className='home-search-bar-wrapper'>
      <form action='' className='home-search-form'>
        <button>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='48px'
            viewBox='0 0 24 24'
            width='48px'
            fill='#000000'
          >
            <path d='M0 0h24v24H0z' fill='none' />
            <path d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' />
          </svg>
        </button>
        <input
          type='text'
          placeholder='Search for anything'
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
      <div
        className={
          'home-search-result ' + (input.length >= 2 ? 'expand' : 'shrink')
        }
      >
        {input}
      </div>
    </div>
  );
};

export default SearchBar;
