
import styles from './HeroMedia.module.css'
import { Button } from '../UI/Button/Button'

function HeroMedia({ img, title, type, date, runtime, genres, description }) {
    return (
        <div className={styles.heroMedia}>
            <div className={styles['heroMedia__wrapper']}>
                <header className={styles['heroMedia__header']}>
                    <div className={styles['heroMedia__genres']}>
                        {genres.length > 0 && genres.map((genre => <h6 key={genre.id} className={styles['heroMedia__genre']}>{genre.name}</h6>))}
                    </div>
                    <h2 className={styles['heroMedia__heading']}>{title}</h2>
                </header>
                <div>
                    <div className={styles['heroMedia__details']}>
                        <p className={styles['heroMedia__type']}>{type.toUpperCase()}</p>
                        <p className={styles['heroMedia__date']}>{new Date(date).getFullYear()}</p>
                        <p className={styles['heroMedia__runtime']}>{Math.floor(runtime / 60)}h {runtime % 60} minutes</p>
                    </div>
                    <p className={styles['heroMedia__description']}>{description}</p>
                </div>
                <div className={styles.actions}>
                    <Button>Play</Button>
                    <Button>More info</Button>
                </div>
            </div>
            <img src={img} alt="poster" width="100%" className={styles.img} />
        </div >)
}

export default HeroMedia;