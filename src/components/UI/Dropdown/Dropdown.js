import { useState } from 'react'
import styles from './Dropdown.module.css'
import { ReactComponent as DropdownArrow } from '../../../assets/dropdownArrow.svg'

function Dropdown({ header, children }) {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div className={styles.dropdown}>
            <div onClick={() => setIsExpanded((prev) => prev = !prev)} className={styles.dropdown__header}>
                {header}
                <DropdownArrow className={isExpanded ? [styles.icon, styles['icon--rotated']].join(' , ') : styles.icon} />
            </div>
            {
                isExpanded &&
                <ul className={[styles.dropdown__list, styles['dropdown__list--right']].join(' , ')}>
                    {children.map((child, index) => <li key={index} className={styles.dropdown__item}>{child}</li>)}
                </ul>
            }
        </div >
    );
}

export default Dropdown;