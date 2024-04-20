
import styles from './style.module.scss';
import logo from '../../img/headerImg/OgettoLogo.png';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    }

    return (
        <div className={styles.header__container}>
            <header className={styles.header}>
                <div className={styles.header__logo} onClick={handleHome} ><img onClick={handleHome} src={logo} alt="logo"></img></div>
                <button className={styles.header__button}>ВХОД</button>
            </header>
        </div>
    )

}
export default Header;