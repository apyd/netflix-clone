import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg'
import styles from './SearchBox.module.css'
import { useState } from 'react'

function SearchBox({ placeholder }) {
    const [isFocused, setIsFocused] = useState(true);
    return (
        <div className={styles.searchBox}>
            {isFocused &&
                <input type="search" placeholder='This is placeholder' className={styles.searchBox__input} />}
            <SearchIcon className={[styles['icon'], styles['icon--small']].join(' , ')} onClick={() => setIsFocused(prev => prev = !prev)} />
        </div>)
}

export default SearchBox;