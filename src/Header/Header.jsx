import styles from './Header.module.css';
import { NavLink } from 'react-router';
function Header() {

    return(
        <header className={styles.header}>
            <h2>Connor McGaughey</h2>
            <ul className={styles.navbar}>
                <li className={styles.navbutton}><NavLink to="/">Home</NavLink></li>
                <li className={styles.navbutton}><NavLink to="/aboutme">About Me</NavLink></li>
                <li className={styles.navbutton}><NavLink to="/mywork">My Work</NavLink></li>
                <li className={styles.navbutton}><NavLink to="contactme">Contact Me</NavLink></li>
            </ul>
        </header>
    )
}
export default Header