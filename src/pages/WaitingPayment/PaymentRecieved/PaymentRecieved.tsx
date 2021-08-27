import styles from './paymentRecieved.module.scss';


const PaymentRecieved = () => {
  return (
    <div>
      <div className={styles.ContainerPayment}>
        <div className={styles.PaymentBox}>
            <h1 className={styles.TopicWaiting}>Payment Recieved</h1>
            <p>Thank you for purchase. <br /> Hope that you enjoy the webinar</p>
            <ol>
              <li>Payment verification will be done automatically with a maximum processing limit of 2x24 hours.</li>
              <li>If there are problems with payment, users can contact webzie support team through support.webzie@gmail.com</li>
              <li>Items taht have been paid for are non-refundable. We do not accept returns, except for violations by the webinar host.</li>
            </ol>
            <div className={styles.button}>
          <button>Return</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRecieved;
