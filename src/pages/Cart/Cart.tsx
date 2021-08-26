import { useState } from 'react';
import styles from './cart.module.scss';
import webinars from '../../data/static/webinar_mock.js';

import Layout from '../../hoc/Layout/Layout';
import Summary from '../Cart/Summary/Summary';
import Webinar from './Webinar/Webinar';
import Payment from './Payment/Payment';

const Cart = () => {
  const [payment, setPayment] = useState(false);

  const webinarList = webinars.map((webinar) => (
    <Webinar
      poster={webinar.poster}
      host={webinar.host}
      price={webinar.price}
      title={webinar.title}
    />
  ));

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.cart_box}>
          <div className={styles.cart_topic}>
            <h1>Your Cart</h1>
          </div>
          <div className={styles.box_cart}>
            <div className={styles.cart_left}>
              <div className={styles.left_top}>
                <div className={styles.checkbox}>
                  <input type='checkbox' value='checkall' />
                  <p>Check All</p>
                </div>
                <div className={styles.image}>
                  <img
                    src={
                      require('../../assets/images/icon_svg/delete_black_48dp.svg')
                        .default
                    }
                    alt='trash'
                  />
                </div>
              </div>
              <div className={styles.cart_list}>{webinarList}</div>
            </div>
            <div className={styles.cart_right}>
              <div className={styles.box_price_information}>
                <h1>Summary</h1>
                {!payment && <Summary onClick={() => setPayment(true)} />}
                {payment && <Payment />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
