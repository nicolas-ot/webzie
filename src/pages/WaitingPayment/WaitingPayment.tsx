import styles from './waitingPayment.module.scss';
import { Link } from 'react-router-dom';

const WaitingPayment = () => {
  return (
    <div>
      <div className={styles.ContainerPayment}>
        <div className={styles.PaymentBox}>
            <h1 className={styles.TopicWaiting}>Waiting for Payment</h1>
            <p>Please complete the transaction in:</p>
            <div className={styles.Timer}>
              <div className={styles.Day}>
                <p>00</p>
                <p>day</p>
              </div>
              <p>:</p>
              <div className={styles.Day}>
                <p>01</p>
                <p>hour</p>
              </div>
              <p>:</p>
              <div className={styles.Day}>
                <p>00</p>
                <p>min</p>
              </div>
              <p>:</p>
              <div className={styles.Day}>
                <p>00</p>
                <p>sec</p>
              </div>
            </div>
            <ol>
              <li>Payment verification will be done automatically with a maximum processing limit of 2x24 hours.</li>
              <li>If there are problems with payment, users can contact webzie support team through support.webzie@gmail.com</li>
              <li>If payment is not recieved by the payment deadline, your purchase will be automatically canceled.</li>
            </ol>
            <div className={styles.button}>
            <Link to={`/cart`}>
              <button>
                Return
              </button>
            </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingPayment;
