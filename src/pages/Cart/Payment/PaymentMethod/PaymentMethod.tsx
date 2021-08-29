import { ReactChild } from 'react';
import styles from './paymentMethod.module.scss';

interface PaymentMethodProps {
  title: string;
  setPaymentMethod: () => void;
  open?: boolean;
  children: ReactChild;
}

const PaymentMethod: React.FC<PaymentMethodProps> = ({
  title,
  children,
  open,
  setPaymentMethod,
}) => {
  return (
    <>
      <div className={styles.BoxPayment}>
        <div className={styles.BoxContent}>
          <p>{title}</p>
          <i
            style={open ? { transform: ' rotate(-90deg)' } : undefined}
            onClick={() => setPaymentMethod()}
          >
            <img
              src={
                require('../../../../assets/images/icon_svg/arrow_drop_down.svg')
                  .default
              }
              alt='arrow'
              width='100%'
            />
          </i>
        </div>
        <div
          className={
            open ? [styles.Dropdown, styles.Open].join('') : styles.Dropdown
          }
        >
          {children}
        </div>
      </div>
    </>
  );
};

PaymentMethod.defaultProps = {
  open: false,
};

export default PaymentMethod;
