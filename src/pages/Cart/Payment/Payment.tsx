import { Link } from 'react-router-dom';
import styles from './payment.module.scss';
import { currencyFormatter } from '../../../utilities/utility';

const Payment = () => {
  return (
    <div>
      <div className={styles.SummaryWrapper}>
        <div className={styles.total}>
          <p>Subtotal</p>
          <div className={styles.nominal}>
            <p>{currencyFormatter.format(10000)}</p>
          </div>
        </div>
        <div className={styles.salin}>
          <a href="#">Salin nomor</a>
        </div>
        <hr />
        <p className={styles.PayWith}>Pay with</p>
        <div className={styles.BoxPayment}>
            <p>Bank Transfer</p>
            <i><img src={require('../../../assets/images/icon_svg/arrow_drop_down.svg').default}
                 alt="arrow" width="100%" /></i>
        </div>
        <div className={styles.BoxPayment}>
            <p>Virtual Account</p>
            <i><img src={require('../../../assets/images/icon_svg/arrow_drop_down.svg').default}
                 alt="arrow" width="100%" /></i>
        </div>
        <div className={styles.BoxPayment}>
            <p>E-Wallet</p>
            <i><img src={require('../../../assets/images/icon_svg/arrow_drop_down.svg').default}
                 alt="arrow" width="100%" /></i>
        </div>
        <div className={styles.BoxPayment}>
            <p>Credit Cards</p>
            <i><img src={require('../../../assets/images/icon_svg/arrow_drop_down.svg').default}
                 alt="arrow" width="100%" /></i>
        </div>
        <div className={styles.button}>
          <Link to={`/waiting-for-payment`}>
            <button>
              Pay
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
