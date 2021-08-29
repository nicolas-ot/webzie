import styles from './paymentRules.module.scss';


const PaymentRules = () =>{
    return(

        <ol className={styles.rules}>
              <li>The maximum payment deadline is 24 hours after setting the payment method.</li>
              <li>Payment verification will be done automatically with a maximum processing limit of 2x24 hours.</li>
              <li>If there are problems with payment, users can contact support.webzie@gmail.com.</li>
        </ol>

    )
}

export default PaymentRules;