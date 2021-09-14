// import { Link } from 'react-router-dom';
import styles from './payment.module.scss';
import { currencyFormatter } from '../../../utilities/utility';
import { useHistory } from 'react-router-dom';

import PaymentMethod from './PaymentMethod/PaymentMethod';
import PaymentRules from './PaymentRules/PaymentRules';
import { useState } from 'react';

interface PaymentProps {
  total: number;
}

enum PaymentMethods {
  BANK_TRANSFER = 'Bank Transfer',
  VIRTUAL_ACCOUNT = 'Virtual Account',
  E_WALLET = 'E-Wallet',
  CREDIT_CARD = 'Credit Card',
}

// const PaymentMethodList = PaymentMethodData.map((paymentMethod) => {
//   return (
//     <PaymentMethod
//       title = {paymentMethod.title}
//     />
//   );
// });

const Payment: React.FC<PaymentProps> = ({ total }) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods | ''>(
    PaymentMethods.BANK_TRANSFER
  );

  const [unselectedPaymentMethod, setUnselectedPaymentMethod] = useState(false);

  const { push } = useHistory();

  const setPaymentMethodProperty = (selectedPaymentMethod: PaymentMethods) => {
    return {
      open: paymentMethod === selectedPaymentMethod,
      title: selectedPaymentMethod,
      setPaymentMethod:
        paymentMethod !== selectedPaymentMethod
          ? () => {
              setPaymentMethod(selectedPaymentMethod);
              setUnselectedPaymentMethod(false);
            }
          : () => {
              setPaymentMethod('');
            },
    };
  };

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
          <a href='dummy'>Salin nomor</a>
        </div>
        <hr />
        <p className={styles.PayWith}>Pay with</p>
        <PaymentMethod
          {...setPaymentMethodProperty(PaymentMethods.BANK_TRANSFER)}
        >
          <div className={styles.PaymentMethod}>
            <select>
              <option value=''>Bank BCA</option>
              <option value=''>Bank Mandiri</option>
              <option value=''>Bank BRI</option>
              <option value=''>Bank BNI</option>
            </select>
            <p className={styles.Rekening}>XXXXXXXXX</p>
            <a href='dummy'>Salin Nomor Rekeneing</a>
            <PaymentRules />
          </div>
        </PaymentMethod>
        <PaymentMethod
          {...setPaymentMethodProperty(PaymentMethods.VIRTUAL_ACCOUNT)}
        >
          <div className={styles.PaymentMethod}>
            <select>
              <option value=''>Bank BCA</option>
              <option value=''>Bank Mandiri</option>
              <option value=''>Bank BRI</option>
              <option value=''>Bank BNI</option>
            </select>
            <p className={styles.Rekening}>XXXXXXXXXXXXXXXXX</p>
            <a href='dummy'>Salin Nomor Rekeneing</a>
            <PaymentRules />
          </div>
        </PaymentMethod>
        <PaymentMethod {...setPaymentMethodProperty(PaymentMethods.E_WALLET)}>
          <div className={styles.PaymentMethod}>
            <select>
              <option value=''>GOPAY</option>
              <option value=''>OVO</option>
              <option value=''>SHOPEE PAY</option>
            </select>
            <p className={styles.Ewallet}>E-Wallet Account Number</p>
            <input type='text' placeholder='Account Number' />
            <PaymentRules />
          </div>
        </PaymentMethod>
        <PaymentMethod
          {...setPaymentMethodProperty(PaymentMethods.CREDIT_CARD)}
        >
          <div className={styles.CreditCard}>
            '
            <div className={styles.GroupForm}>
              <label htmlFor=''>Card number</label>
              <input type='text' placeholder='Credit Card Number' />
            </div>
            <div className={styles.GroupForm}>
              <label htmlFor=''>Name on Card</label>
              <input type='text' placeholder='Name' />
            </div>
            <div className={styles.GroupForm2}>
              <div className={styles.HalfForm}>
                <label htmlFor=''>Date Expired</label>
                <input type='text' placeholder='Date' />
              </div>
              <div className={styles.HalfForm}>
                <label htmlFor=''>CVV</label>
                <input type='text' placeholder='CVV' />
              </div>
            </div>
            <PaymentRules />
          </div>
        </PaymentMethod>
        <div className={styles.button}>
          {unselectedPaymentMethod && <p>please select a payment method</p>}
          <button
            onClick={() => {
              paymentMethod !== ''
                ? push('/waiting-for-payment')
                : setUnselectedPaymentMethod(true);
            }}
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
