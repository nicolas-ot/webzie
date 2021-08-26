import styles from './Summary.module.scss';
import { currencyFormatter } from '../../../utilities/utility';

interface SummaryProps {
  onClick: () => void;
  subTotal: number;
}

const serviceFee = 25000;

const Summary: React.FC<SummaryProps> = ({ onClick, subTotal }) => {
  return (
    <div className={styles.SummaryWrapper}>
      <div className={styles.total}>
        <p>Subtotal</p>
        <div className={styles.nominal}>
          <p>{currencyFormatter.format(subTotal)}</p>
        </div>
      </div>
      <div className={styles.total}>
        <p>Service Fee</p>
        <div className={styles.nominal}>
          <p>{currencyFormatter.format(serviceFee)}</p>
        </div>
      </div>
      <div className={styles.discount}>
        <p>
          <i>Discount</i>
        </p>
        <div className={styles.nominal_discount}>
          <p>
            <i>Rp</i>
          </p>
          <p>
            <i>0,-</i>
          </p>
        </div>
      </div>
      <div className={styles.code}>
        <p>
          <b>First Name</b>
        </p>
        <input type='text' placeholder='Enter voucher code' />
        <div className={styles.box_button}>
          <button>Apply</button>
        </div>
      </div>
      <hr />
      <div className={styles.total}>
        <p>Total</p>
        <div className={styles.nominal}>
          <p>{currencyFormatter.format(subTotal + serviceFee)}</p>
        </div>
      </div>
      <div className={styles.button_checkout}>
        <button onClick={() => onClick()}>Check Out</button>
      </div>
    </div>
  );
};

export default Summary;
