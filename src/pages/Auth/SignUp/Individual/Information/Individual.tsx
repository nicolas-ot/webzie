import styles from './Individual.module.scss';

import IndividualTwo from './Individual_2';

// interface IndividualProps {
//   changeToOrganization: () => void;
// }

const Individual: React.FC = () => {
  return (
    <>
      <div className={styles.image}>
        <img
          src={
            require('../../../../../assets/images/Full Page/Sign In - Sign Up/Sign Up - Personal/Information/Asset 1.jpg')
              .default
          }
          alt='asset'
          width='100%'
          height='100%'
        />
      </div>
      <div className={styles.input}>
        <IndividualTwo />
      </div>
    </>
  );
};

export default Individual;
