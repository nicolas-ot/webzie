import styles from './share.module.scss';

interface ShareProps {
  size: string;
}

const Share: React.FC<ShareProps> = ({ size }) => {
  const svgSize = size === 'big' ? '36px' : '24px';
  return (
    <div className={styles.Share}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height={svgSize}
        viewBox='0 0 24 24'
        width={svgSize}
        fill='#000000'
      >
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z' />
      </svg>
      <div className={styles.ShareText}>Share</div>
    </div>
  );
};

export default Share;
