import { string } from 'yargs';
import styles from './GroupFormHalf.module.scss';

interface GroupFormHalfProps {
    titleLeft : string,
    titleRight : string,
    placeholderLeft : string,
    placeholderRight : string,
    type : string;
}

const GroupFormHalf: React.FC<GroupFormHalfProps> = ({titleLeft,titleRight,placeholderLeft,placeholderRight,type}) => {
    let status;

    switch(type){
        case "time" :
            status = (
                <div className={styles.GroupForm2}>
                    <div className={styles.GroupFormLeft}>
                    <label htmlFor="">{titleLeft}</label>
                    <input type="text" placeholder="dd/mm/yy" />
                    </div>
                    <div className={styles.GroupFormRight}>
                    <label htmlFor="">{titleRight}</label>
                    <div className={styles.TimeStartEnd}>
                        <input type="text" placeholder="hh:mm" />
                        <p>-</p>
                        <input type="text" placeholder="hh:mm" />
                    </div>
                    </div>
                </div>
                )
                break; 
        case "normal" :
            status = (
                <div className={styles.GroupForm2}>
                <div className={styles.GroupFormLeft}>
                    <label htmlFor="">{titleLeft}</label>
                    <input type="text" placeholder={placeholderLeft} />
                </div>
                <div className={styles.GroupFormRight}>
                    <label htmlFor="">{titleRight}</label>
                    <input type="text" placeholder={placeholderRight} />
                </div>
                </div>
            )
            break;
        case "halfNoLabel" :
            status = (
                <div className={styles.GroupForm2}>
                    <div className={styles.GroupFormLeft}>
                    <input type="text" placeholder={placeholderLeft} />
                    </div>
                 </div>
            )
    }
    return(
        <>
        {status}
        </>
    )
}

export default GroupFormHalf;