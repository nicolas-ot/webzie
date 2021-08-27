import styles from './paymentMethod.module.scss';

interface PaymentMethodProps {
    title : string;
}

const PaymentMethod : React.FC<PaymentMethodProps> = ({title}) => {
    return (
        <div className={styles.BoxPayment}>
          <p>{title}</p>
          <i>
            <img
              src={
                require('../../../assets/images/icon_svg/arrow_drop_down.svg')
                  .default
              }
              alt='arrow'
              width='100%'
            />
          </i>
        </div>
    )
}

export default PaymentMethod;