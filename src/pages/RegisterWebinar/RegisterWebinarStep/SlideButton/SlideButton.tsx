import styles from './SlideButton.module.scss';

const SlideButton = () =>{
    return (
        <>
            <div className={styles.leftBtn}>
                <img src={require('../../../../assets/images/icon_svg/arrow_drop_down.svg').default}
                alt="arrow" width="70%" />
            </div>
            <div className={styles.rightBtn}>
                <img src={require('../../../../assets/images/icon_svg/arrow_drop_down.svg').default}
                alt="arrow" width="70%" />
            </div>
        </>
    )
}

export default SlideButton;