import styles from './HomePage.module.scss'
function HomePage() {
    return (
    <div className={styles.cta}>
        <div className={styles.header}>Home Header</div>
        <span>
            Sample Image 1
        </span>
        <span>
            Sample Image 2
        </span>
        <div>
            <div>
                Your <em>Album</em> and <em>Artist</em> Name
            </div>
            <div>
                <div>on <em>Custom</em> Album Designs</div>
            </div>
            <button class='cta'>Shop Now</button>
        </div>
        <span>
            Sample Image 3
        </span>
        <span>
            Sample Image 4
        </span>
    </div>
    )
}

export default HomePage