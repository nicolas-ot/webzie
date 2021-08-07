import './sidebar.scss';
import SidebarItem from './SidebarItem/SidebarItem';
import variables from '../../../../utilities/_variables.module.scss';
import { useTypedSelector } from '../../../../hooks/use-typed-selector';
import { useEffect } from 'react';

interface SidebarProps {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, setActivePage }) => {
  const getSVGFill = (name: string) => {
    if (activePage === name) return 'white';
    else return variables['dark-purple'];
  };

  const sidebarItemsUser = [
    {
      name: 'Home',
      link: 'home',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48px'
          viewBox='0 0 24 24'
          width='24px'
          fill={getSVGFill('Home')}
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
        </svg>
      ),
    },

    {
      name: 'My Calendar',
      link: 'my-calendar',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enableBackground='new 0 0 20 20'
          height='48px'
          viewBox='0 0 20 20'
          width='24px'
          fill={getSVGFill('My Calendar')}
        >
          <rect fill='none' height='20' width='20' />
          <path d='M9.5,18h-5C3.67,18,3,17.32,3,16.5v-11C3,4.68,3.67,4,4.5,4H6V2h1.5v2h5V2H14v2h1.5C16.33,4,17,4.68,17,5.5V10h-1.5V9h-11 v7.5h5V18z M17.78,13.99l0.65-0.65c0.29-0.29,0.29-0.77,0-1.06l-0.71-0.71c-0.29-0.29-0.77-0.29-1.06,0l-0.65,0.65L17.78,13.99z M17.19,14.58L12.77,19H11v-1.77l4.42-4.42L17.19,14.58z' />
        </svg>
      ),
    },
    {
      name: 'Badges',
      link: 'badges',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48px'
          viewBox='0 0 24 24'
          width='24px'
          fill={getSVGFill('Badges')}
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z' />
        </svg>
      ),
    },
    {
      name: 'My Webinars',
      link: 'my-webinars',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enableBackground='new 0 0 24 24'
          height='48px'
          viewBox='0 0 24 24'
          width='24px'
          fill={getSVGFill('My Webinars')}
        >
          <g>
            <rect fill='none' height='24' width='24' />
            <path d='M19,3H5C3.89,3,3,3.9,3,5v14c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.11,3,19,3z M19,19H5V7h14V19z M13.5,13 c0,0.83-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5S13.5,12.17,13.5,13z M12,9c-2.73,0-5.06,1.66-6,4 c0.94,2.34,3.27,4,6,4s5.06-1.66,6-4C17.06,10.66,14.73,9,12,9z M12,15.5c-1.38,0-2.5-1.12-2.5-2.5c0-1.38,1.12-2.5,2.5-2.5 c1.38,0,2.5,1.12,2.5,2.5C14.5,14.38,13.38,15.5,12,15.5z' />
          </g>
        </svg>
      ),
    },
    {
      name: 'E-Certificate',
      link: 'e-certificate',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48px'
          viewBox='0 0 24 24'
          width='24px'
          fill={getSVGFill('E-Certificate')}
        >
          <path
            d='M-74 29h48v48h-48V29zM0 0h24v24H0V0zm0 0h24v24H0V0z'
            fill='none'
          />
          <path d='M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z' />
        </svg>
      ),
    },
    {
      name: 'History',
      link: 'history',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill={getSVGFill('History')}
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z' />
        </svg>
      ),
    },
  ];

  const sidebarItemsHost = [
    {
      name: 'Home',
      link: 'home',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48px'
          viewBox='0 0 24 24'
          width='24px'
          fill={getSVGFill('Home')}
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
        </svg>
      ),
    },
    {
      name: 'Statistic',
      link: 'statistic',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enable-background='new 0 0 24 24'
          height='48px'
          viewBox='0 0 24 24'
          width='24px'
          fill={getSVGFill('Statistic')}
        >
          <g>
            <rect fill='none' height='24' width='24' />
            <g>
              <path d='M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z' />
              <rect height='5' width='2' x='7' y='12' />
              <rect height='10' width='2' x='15' y='7' />
              <rect height='3' width='2' x='11' y='14' />
              <rect height='2' width='2' x='11' y='10' />
            </g>
          </g>
        </svg>
      ),
    },
    {
      name: 'Survey Form',
      link: 'survey-form',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          enable-background='new 0 0 20 20'
          height='48px'
          viewBox='0 0 20 20'
          width='24px'
          fill={getSVGFill('Survey Form')}
        >
          <g>
            <rect fill='none' height='20' width='20' x='0' />
          </g>
          <g>
            <g>
              <path d='M7,4v0.73c-0.68-0.32-1.4-0.5-2.13-0.5c-1.28,0-2.56,0.49-3.54,1.46l2.12,2.12h1.41L4.76,9.13 c0.62,0.62,1.42,0.92,2.23,0.92c0,0,0.01,0,0.01,0V12H5v2.5C5,15.33,5.67,16,6.5,16H14c1.1,0,2-0.9,2-2V4H7z M6.99,9.05 c-0.43,0-0.84-0.12-1.19-0.36l0.15-1.87H3.87L2.84,5.79c0.61-0.36,1.31-0.55,2.03-0.55c1.07,0,2.07,0.42,2.83,1.17l1.41,1.41 l-0.6,0.6C8.1,8.82,7.56,9.05,6.99,9.05z M15,14c0,0.55-0.45,1-1,1s-1-0.45-1-1v-2H8V9.87c0.44-0.15,0.86-0.39,1.22-0.74l0.6-0.6 L12.29,11H13v-0.71L8.4,5.7C8.28,5.57,8.14,5.48,8,5.37V5h7V14z' />
            </g>
          </g>
        </svg>
      ),
    },
    {
      name: 'Wallet',
      link: 'wallet',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='48px'
          viewBox='0 0 24 24'
          width='24px'
          fill={getSVGFill('Wallet')}
        >
          <path d='M0 0h24v24H0V0z' fill='none' />
          <path d='M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z' />
          <circle cx='16' cy='12' r='1.5' />
        </svg>
      ),
    },
    {
      name: 'History',
      link: 'history',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
          fill={getSVGFill('History')}
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path d='M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z' />
        </svg>
      ),
    },
  ];

  const mode = useTypedSelector((state) => state.modes.mode);

  const sidebarItemsList = (
    mode === 'user' ? sidebarItemsUser : sidebarItemsHost
  ).map((sidebarItem) => (
    <SidebarItem
      key={sidebarItem.name}
      onClick={() => setActivePage(sidebarItem.name)}
      link={sidebarItem.link}
      svg={sidebarItem.svg}
      active={activePage === sidebarItem.name ? true : false}
    >
      {sidebarItem.name}
    </SidebarItem>
  ));

  return (
    <div className='sidebar-wrapper'>
      <ul>{sidebarItemsList}</ul>
    </div>
  );
};

export default Sidebar;
