
import styles from './style.module.scss';
import logo from '../../img/headerImg/header.png';
import google from '../../img/headerImg/google.png';
import { HttpApiMethods } from '../utils/FetchUtils';
import { useState, useEffect } from 'react';
import icon from '../../img/headerImg/Icon.png';
import Menu from '../Menu'
import { useNavigate } from "react-router-dom";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCL_pQCNBEs-8zB11kRhTQgZt12866wnKE",
  authDomain: "hacka-fbe52.firebaseapp.com",
  projectId: "hacka-fbe52",
  storageBucket: "hacka-fbe52.appspot.com",
  messagingSenderId: "930995595343",
  appId: "1:930995595343:web:30efc62baf6574d770e23a",
  measurementId: "G-RPP3ZVK4GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const httpApiMethods = new HttpApiMethods()



const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [Auth, setAuth] = useState(null);
    const handleHome = () => {
        navigate('/');
    }
    const authWithToken = async (email) => {

       
            const response = await httpApiMethods.GetAuthUser(email);
            setAuth(response);
            if (Auth.access) {
                localStorage.setItem('token', Auth.access);
            }
            
            // Расчет общего количества страниц
        
        
    }
    useEffect(() => {
        if (user) {
            console.log(user.email)
            authWithToken(user.email)
        }
      
    }, [user])
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            // Успешный вход
            const user = result.user;
            setUser(user);
            console.log(user);
            // Здесь можно перенаправить пользователя или обновить состояние компонента
          })
          .catch((error) => {
            // Обработка ошибок
            console.error(error);
          });
     };
    


    return (
        <>
            {(localStorage.getItem('token') ? (
            <div className={styles.header__container}>
            <header className={styles.header}>
                <div className={styles.header__logo} onClick={handleHome} ><img onClick={handleHome} src={logo} alt="logo"></img></div>
                <div className={styles.header_img_container}>  <img className={styles.header_img} src={icon}></img> <Menu></Menu></div>
                
            </header>
        </div>
        ) :
        (
            <div className={styles.header__container}>
                <header className={styles.header}>
                    <div className={styles.header__logo} onClick={handleHome} ><img onClick={handleHome} src={logo} alt="logo"></img></div>
                    
                    <button onClick={signInWithGoogle}>Войти через Google</button>
                </header>
            </div>
        ))
            }
       

        </>
        
    )

}
export default Header;