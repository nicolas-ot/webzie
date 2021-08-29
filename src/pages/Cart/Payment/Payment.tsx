import { Link } from 'react-router-dom';
import styles from './payment.module.scss';
import { currencyFormatter } from '../../../utilities/utility';
import PaymentMethodData from '../../../data/static/paymentMethod';

import PaymentMethod from '../PaymentMethod/PaymentMethod';
import PaymentRules from './PaymentRules/PaymentRules';

interface PaymentProps {
  total: number;
}

// const PaymentMethodList = PaymentMethodData.map((paymentMethod) => {
//   return (
//     <PaymentMethod
//       title = {paymentMethod.title}
//     />
//   );
// });

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
        <PaymentMethod title='bank transfer'>
          <div className={styles.BankTransfer}>
            <select>
              <option value="">Bank BCA</option>
              <option value="">Bank Mandiri</option>
              <option value="">Bank BRI</option>
              <option value="">Bank BNI</option>
            </select>
            <p className={styles.Rekening}>XXXXXXXXX</p>
            <a href="#">Salin Nomor Rekeneing</a>
            <PaymentRules />
          </div>
        </PaymentMethod>
        <PaymentMethod title='Virtual Account'>
          <div className={styles.BankTransfer}>
            <select>
              <option value="">Bank BCA</option>
              <option value="">Bank Mandiri</option>
              <option value="">Bank BRI</option>
              <option value="">Bank BNI</option>
            </select>
            <p className={styles.Rekening}>XXXXXXXXXXXXXXXXX</p>
            <a href="#">Salin Nomor Rekeneing</a>
            <PaymentRules />
          </div>
        </PaymentMethod>
        <PaymentMethod title='E-Wallet'>
        <div className={styles.BankTransfer}>
            <select>
              <option value="">GOPAY</option>
              <option value="">OVO</option>
              <option value="">SHOPEE PAY</option>
            </select>
            <p className={styles.Ewallet}>E-Wallet Account Number</p>
            <input type="text" placeholder="Account Number" />
            <PaymentRules />
          </div>
        </PaymentMethod>
        <PaymentMethod title='Credit Cards'>
          <div className={styles.CreditCard}>'
            <div className={styles.GroupForm}>
              <label htmlFor="">Card number</label>
              <input type="text" placeholder="Credit Card Number" />
            </div>
            <div className={styles.GroupForm}>
              <label htmlFor="">Name on Card</label>
              <input type="text" placeholder="Name" />
            </div>
            <div className={styles.GroupForm2}>
              <div className={styles.HalfForm}>
                <label htmlFor="">Date Expired</label>
                <input type="text" placeholder="Date" />
              </div>
              <div className={styles.HalfForm}>
                <label htmlFor="">CVV</label>
                <input type="text" placeholder="CVV" />
              </div>
            </div>
            <PaymentRules />
          </div>
        </PaymentMethod>
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
