import { NavLink } from 'react-router-dom'
import Dropdown from '../UI/Dropdown/Dropdown'
import SearchBox from '../SearchBox/SearchBox'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { AppRoutes } from '../../routing/AppRoutes'
import avatar from '../../assets/avatar.png'
import styles from './Navigation.module.css'

function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles['nav__items']}>
                <div className={styles['nav__links']}>
                    <NavLink to={AppRoutes.HOME.path} className={styles['nav__link']}>
                        <Logo className={styles.logo} />
                    </NavLink>
                    <NavLink to={AppRoutes.HOME.path} className={({ isActive }) => isActive
                        ? [styles['nav__link'], styles['nav__link--active']].join(' , ')
                        : styles['nav__link']}>Home page</NavLink>
                    <NavLink to={AppRoutes.TVSERIES.path} className={({ isActive }) => isActive
                        ? [styles['nav__link'], styles['nav__link--active']].join(' , ')
                        : styles['nav__link']}>TV Series</NavLink>
                    <NavLink to={AppRoutes.MOVIES.path} className={({ isActive }) => isActive
                        ? [styles['nav__link'], styles['nav__link--active']].join(' , ') : styles['nav__link']}>Movies</NavLink>
                    <NavLink to={AppRoutes.MYLIST.path} className={({ isActive }) => isActive
                        ? [styles['nav__link'], styles['nav__link--active']].join(' , ')
                        : styles['nav__link']}>My list</NavLink>
                    {/* <Dropdown header="Przeglądaj">
                        <NavLink to={AppRoutes.HOME.path} className={({ isActive }) => isActive
                            ? [styles['nav__link'], styles['nav__link--active']].join(' , ')
                            : styles['nav__link']}>Home page</NavLink>
                        <NavLink to={AppRoutes.TVSERIES.path} className={({ isActive }) => isActive
                            ? [styles['nav__link'], styles['nav__link--active']].join(' , ')
                            : styles['nav__link']}>TV Series</NavLink>
                        <NavLink to={AppRoutes.MOVIES.path} className={({ isActive }) => isActive
                            ? [styles['nav__link'], styles['nav__link--active']].join(' , ') : styles['nav__link']}>Movies</NavLink>
                        <NavLink to={AppRoutes.MYLIST.path} className={({ isActive }) => isActive
                            ? [styles['nav__link'], styles['nav__link--active']].join(' , ')
                            : styles['nav__link']}>My list</NavLink>
                    </Dropdown> */}
                </div>
                <div className={styles['nav__options']}>
                    <SearchBox />
                    <Dropdown header={<img src={avatar} height="40px" alt="user avatar icon" />}>
                        <NavLink to={AppRoutes.PREFERENCES.path} className={({ isActive }) => isActive
                            ? [styles['nav__link'], styles['nav__link--active']].join(' , ')
                            : styles['nav__link']}>Preferences</NavLink>
                        <NavLink to={AppRoutes.PAYMENTS.path} className={({ isActive }) => isActive
                            ? [styles['nav__link'], styles['nav__link--active']].join(' , ')
                            : styles['nav__link']}>Payments</NavLink>
                        <NavLink to={AppRoutes.LOGIN.path} className={({ isActive }) => isActive
                            ? [styles['nav__link'], styles['nav__link--active']].join(' , ')
                            : styles['nav__link']}>Logout</NavLink>
                    </Dropdown>
                </div>
            </ul>
        </nav >)
}

export default Navigation;
