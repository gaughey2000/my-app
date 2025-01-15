import styles from './Header.module.css';

function Header() {

    return(
        <header className={styles.header}>
            <h2>Connor McGaughey</h2>
            <ul className={styles.navbar}>
                <li className={styles.navbutton}><a href="#">Home</a></li>
                <li className={styles.navbutton}><a href="#">About Me</a></li>
                <li className={styles.navbutton}><a href="#">My Work</a></li>
                <li className={styles.navbutton}><a href="#">Contact Me</a></li>
            </ul>
        </header>
    )
}
export default Header