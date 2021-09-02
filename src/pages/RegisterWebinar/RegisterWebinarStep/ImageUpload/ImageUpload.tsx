import styles from './ImageUpload.module.scss';

import Button from '../../../../elements/Button/Button';

interface ImageUploadProps{
    title : string;
}

const ImageUpload:React.FC<ImageUploadProps> = ({title}) =>{
    return (
        <>

            <label className={styles.ImageUploadTitle}>Webinar {title}</label>
            <div className={styles.ImageForm}></div>
            <Button className={styles.ButtonImage}>Upload {title}</Button>
            <p>For {title} guideline. <a href="#">download here</a></p>
        
        </>

    )
}

export default ImageUpload;