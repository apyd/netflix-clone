import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg'
import styles from './SearchBox.module.css'
import { useState } from 'react'

function SearchBox({ placeholder }) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div className={styles.searchBox}>
            {isFocused && <label htmlFor="search">
                <input id="search" name="search" type="search" placeholder={placeholder} className={styles.searchBox__input} />
            </label>
            }
            <SearchIcon className={[styles['icon'], styles['icon--small']].join(' , ')} onClick={() => setIsFocused(prev => prev = !prev)} />
        </div >)
}

export default SearchBox;