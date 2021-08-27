import { Link } from 'react-router-dom';
import styles from './payment.module.scss';
import { currencyFormatter } from '../../../utilities/utility';
import PaymentMethodData from '../../../data/static/paymentMethod';

import PaymentMethod from '../PaymentMethod/PaymentMethod';


interface PaymentProps {
  total: number;
}

const PaymentMethodList = PaymentMethodData.map((paymentMethod) => {
  return (
    <PaymentMethod 
      title = {paymentMethod.title}
    />
  );
});

const Payment: React.FC<PaymentProps> = ({ total }) => {
  return (
    <div>
      <div className={styles.SummaryWrapper}>
        <div className={styles.total}>
          <p>Subtotal</p>
          <div className={styles.nominal}>
            <p>{currencyFormatter.format(total)}</p>
          </div>
        </div>
        <div className={styles.salin}>
          <a href='#'>Salin nomor</a>
        </div>
        <hr />
        <p className={styles.PayWith}>Pay with</p>
        {PaymentMethodList}
        <div className={styles.button}>
          <Link to={`/waiting-for-payment`}>
            <button>Pay</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
