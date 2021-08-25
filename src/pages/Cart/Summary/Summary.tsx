import styles from './Summary.module.scss';

const Summary = () =>{
    return (
        <div className={styles.box_price_information}>
            <h1>Summary</h1>
            <div className={styles.total}>
                <p>Subtotal</p>
                <div className={styles.nominal}>
                    <p>Rp</p>
                    <p>1.000.000,-</p>
                </div>
            </div>
            <div className={styles.total}>
                <p>Service Fee</p>
                <div className={styles.nominal}>
                    <p>Rp</p>
                    <p>25.000,-</p>
                </div>
            </div>
            <div className={styles.discount}>
                <p><i>Discount</i></p>
                <div className={styles.nominal_discount}>
                    <p><i>Rp</i></p>
                    <p><i>0,-</i></p>
                </div>
            </div>
            <div className={styles.code}>
                <p><b>First Name</b></p>
                <input type="text" placeholder="Enter voucher code" />
                <div className={styles.box_button}>
                    <button>Apply</button>
                </div>
            </div>
            <hr />
            <div className={styles.total}>
                <p>Total</p>
                <div className={styles.nominal}>
                    <p>Rp</p>
                    <p><b>1.025.000,-</b></p>
                </div>
            </div>
            <div className={styles.button_checkout}>
                <button>Check Out</button>
            </div>
            </div>
    )
}

export default Summary;