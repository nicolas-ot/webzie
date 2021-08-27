import styles from './Summary.module.scss';
import { currencyFormatter } from '../../../utilities/utility';
import { useRef } from 'react';

interface SummaryProps {
  onClick: () => void;
  subTotal: number;
  serviceFee: number;
  discount: number;
  setDiscount: React.Dispatch<React.SetStateAction<number>>;
}

const Summary: React.FC<SummaryProps> = ({
  onClick,
  subTotal,
  serviceFee,
  discount,
  setDiscount,
}) => {
  const voucherRef = useRef<HTMLInputElement>(null);
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
          <p>{currencyFormatter.format(discount)}</p>
        </div>
      </div>
      <div className={styles.code}>
        <p>
          <b>First Name</b>
        </p>
        <form onSubmit={() => setDiscount(Number(voucherRef.current?.value))}>
          <input
            type='text'
            placeholder='Enter voucher code'
            ref={voucherRef}
          />
          <div className={styles.box_button}>
            <button>apply</button>
          </div>
        </form>
      </div>
      <hr />
      <div className={styles.total}>
        <p>Total</p>
        <div className={styles.nominal}>
          <p>{currencyFormatter.format(subTotal + serviceFee - discount)}</p>
        </div>
      </div>
      <div className={styles.button_checkout}>
        <button onClick={() => onClick()}>Check Out</button>
      </div>
    </div>
  );
};

export default Summary;
