import styles from './Header.module.css'
import Logo from "../../assets/logo.svg"

export function Header() {
    return (
        <div className={styles.container}>
            <img src={Logo} alt="Todo logo" />
        </div>
    )    
}