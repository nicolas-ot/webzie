import { ReactChild } from 'react';
import styles from './paymentMethod.module.scss';

interface PaymentMethodProps {
  title: string;
  children: ReactChild;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ title, children }) => {
  return (
    <>
      <div className={styles.BoxPayment}>
        <div className={styles.BoxContent}>
          <p>{title}</p>
          <i>
            <img
              src={
                require('../../../assets/images/icon_svg/arrow_drop_down.svg')
                  .default
              }
              alt='arrow'
              width='100%'
            />
          </i>
        </div>
        <div>
        {children}
        </div>
      </div>
     
    </>
  );
};

export default PaymentMethod;
