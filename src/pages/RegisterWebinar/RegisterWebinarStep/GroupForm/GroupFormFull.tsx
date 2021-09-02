import styles from './GroupFormFull.module.scss';


interface GroupFormFullProps {
    title : string,
    placeholder : string,
}

const GroupFormFull: React.FC<GroupFormFullProps> = ({title, children,placeholder}) =>{
    return (
        <>
            <div className={styles.GroupForm}>
                <label htmlFor="">{title}</label>
                <input type="text" placeholder={placeholder} />
            </div> 
        </>
    )
}

export default GroupFormFull;