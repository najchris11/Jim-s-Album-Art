import Image from 'next/image'
import styles from './HomePage.module.scss'
import {
    divinity,
    synchronicity,
    theUndertaking, 
    asTheSunSpeaks
} from '../public/images/albums'
import divinityImage from '../public/images/albums/sunset-divide/divinity.png'
function HomePage() {
    return (
        <div className={styles.cta}>
            {/* <div className={styles.header}>Home Header</div> */}
            <span>
                {/* Using Image requires that I either have a fill aspect, or that I set the width and height */}
                <Image width='200' height='200' src='/images/albums/sunset-divide/divinity.png' />
            </span>
            <span className={styles.image}> {/*this doesn't work nearly as efficiently bc it's sized by the css*/}
                <Image src={divinity} />
            </span>
            <div className={styles.ctaText}>
                <div className={styles.ctaMainText}>
                    Your <em>Album</em> and <em>Artist</em> Name
                </div>
                <div className={`${styles.ctaSubText}`}>
                    <div>on <em>Custom</em> Album Designs</div>
                </div>
                <button class='cta'>Shop Now</button>
            </div>
            <span>
                <Image width='200' height='200' src={divinityImage} />
            </span>
            <span>
                <Image width='200' height='200' src='/images/albums/sunset-divide/divinity.png' />
            </span>
        </div>
    )
}

export default HomePage