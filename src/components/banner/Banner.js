import { Link } from 'react-router-dom'

import styles from './Banner.module.css'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'
import image6 from '../../assets/image6.jpg'

// import Container from './Container'

function Banner() {

    return (
        <>
            <div className={styles.bannerDiv}>
                <div className={styles.bannerImageDiv}>
                    <img className={`${styles.bannerImage} ${styles.image1}`} src={image1} alt="" />
                    <img className={`${styles.bannerImage} ${styles.image2}`} src={image2} alt="" />
                    <img className={`${styles.bannerImage} ${styles.image3}`} src={image3} alt="" />
                    <img className={`${styles.bannerImage} ${styles.image4}`} src={image4} alt="" />
                    <img className={`${styles.bannerImage} ${styles.image5}`} src={image5} alt="" />
                    <img className={`${styles.bannerImage} ${styles.image6}`} src={image6} alt="" />
                </div>
                <div className={styles.bannerTextDiv}>
                    <p className={`${styles.craftName}`}>Rose - Artes Manuais</p>
                    <p className={styles.bannerText}>As nossas mãos traduzem o que está no coração. Isso é Artesanato.</p>

                </div>

            </div>
        </>
    )

}

export default Banner