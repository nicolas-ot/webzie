import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div>
      <div>paymenttt</div>
      <button>
        <Link to={`/waiting-for-payment`}>Pay</Link>
      </button>
    </div>
  );
};

export default Payment;
