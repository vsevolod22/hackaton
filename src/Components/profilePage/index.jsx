import Header from "../Header";
import styles from "./style.module.scss"
import avatar from '../../img/profilePage/avatar.png';
import loadingGif from '../../img/AddUsers/loading.png';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
// import Users from "../post/Users";
// import EditMeetsForm from "../edit/EditMeetsForm";
// import PostForm from "../post/Meets";
// import Home from '../Home/Home';
import { HttpApiMethods } from '../utils/FetchUtils';
const httpApiMethods = new HttpApiMethods()
const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id: urlId } = useParams();
    const GetUser = async (id) => {

        setLoading(true);
        const response = await httpApiMethods.GetUser(id);
        setUser(response);
        console.log(response);
        setLoading(false);
        
        // Расчет общего количества страниц
    
    
    }
    useEffect(() => {
        
            if (urlId !== 'null' && urlId) {
                console.log(urlId);
             
                GetUser(urlId)
            }
            
        
      
    }, [urlId])
    const users = [
        {
            id: 1,
            fullName: 'Кирсанов Дмитрий',
            status: 'Встреча состоялась',
            date: '2017-01-12 18:00',
            time: '30 минут',
            description: 'Прикольная встреча',
     
         },
        {
            id: 2,
            fullName: 'Световой Владислав',
            status: 'Встреча не состоялась',
            date: '2020-03-10 12:00',
            time: '15 минут',
            description: 'Кайфово встретились',
     
         },
         {
            id: 3,
            fullName: 'Астафьев Кирилл',
            status: 'Встреча состоялась',
            date: '2021-02-12 10:00',
            time: '30 минут',
            description: 'Нормалды',
     
         },
         {
            id: 4,
            fullName: 'Данилов Николай',
            status: 'Встреча состоялась',
            date: '2021-04-12 16:30',
            time: '30 минут',
            description: 'Крутой чел',
     
         },
        {
            id: 5,
            fullName: 'Борисова Вероника',
            status: 'Встреча не состоялась',
            date: '2022-01-12 11:00',
            time: '15 минут',
            description: 'Не свезло не встретелись',
     
         },
         {
            id: 6,
            fullName: 'Князева Татьяна',
            status: 'Встреча не состоялась',
            date: '2019-01-12 18:00',
            time: '30 минут',
            description: 'Хороший разработчик, но не встетились',
     
         },
       ];
    return (
        <>
            <Header></Header>
            {user && !loading ? <section className={styles.profile__container}>
                <div className={styles.profile__user_container}>
                    <div className={styles.profile__user_img_container}>
                        <img src={avatar} className={styles.profile__user_img}></img>
                        {user.groups.name ? <div className={styles.profile__user_role}>{user.groups[0].name}</div> : <div className={styles.profile__user_role}>Пользователь</div>}
                        
                    </div>
                    <div className={styles.profile__user_info_container}>
                        <div className={styles.profile__user_fullName}><span>{user.last_name[0]}</span>{user.last_name.slice(1)} {user.first_name}</div>
                        {user.position && <div className={styles.profile__user_spaciality}>{user.position.name}</div>}
                        <div className={styles.profile__user_email}>{user.email}</div>
                        <div className={styles.profile__user_email}>{user.time_preference} минут</div>
                    
                    </div>
                </div>
                
            </section> : 
            <div className={styles.loading__img_container}><img className={styles.loading__img} src={loadingGif} alt='loading'></img></div>
                
            }
           
            <section className={styles.myMeets}>
                <div className={styles.myMeets__title}>Ваши встречи</div>
                <div className={styles.meeting__container}>
                    <input className={styles.meeting__inputs} placeholder="Найти встречу"></input>
                    <div className={styles.container}>
                        <div className={styles.select__container}>
                            <select className={styles.select} name="time__meeting">
                                <option value="">Длительность встречи</option>
                                <option value="10">10 минут</option>
                                <option value="15">15 минут</option>
                                <option value="30">30 минут</option>
                            </select>
                            <select className={styles.select} name="type__meeting">
                                <option value="">Тип встречи</option>
                                <option value="all">Все</option>
                                <option value="online">Онлайн</option>
                                <option value="ofline">Офлайн</option>
                            </select>
                        </div>
                    </div>
                    
                   
                    <div className={styles.meets__all_container}>
                    <div className={styles.meets__title_container}>
                        <div className={styles.meets__title_with}>Встреча проводилась с</div>
                        <div className={styles.meets__title_date}>Дата и длительность встречи</div>
                        <div className={styles.meets__title_descr}>Описание встречи</div>
                    </div>
                    {users.map((user, index) => (
                            <div style={{width: '100%'}} key={index}>
                                <div  className={styles.meets_container}>
                                    
                                    <div className={styles.meets_about_container}>
                                        <div className={styles.meets_fullName}><span>{user.fullName[0]}</span>{user.fullName.slice(1)}</div>
                                        <div className={styles.meets_status}>{user.status}</div>
                                    </div>
                                    <div className={styles.meets_info_container_time}>
                                        <div className={styles.meets_time}>{user.date}</div>
                                        <div className={styles.meets_time}>{user.time}</div>
                                    </div>
                                    <div className={styles.meets_info_container}>
                                        <div className={styles.meets_description}>{user.description}</div>
                                    </div>
                                    
                                    
                                </div>
                                <div className={styles.profile__line}></div>
                            </div>
                            
                        ))}
                    </div>
                    {/* <Home></Home> */}
                    {/* <FetchUtils></FetchUtils> */}
                    {/* <PostForm /> */}
                    {/* <EditForm /> */}
                    {/* <Users></Users>
                    <PostForm></PostForm> */}
                </div>
            </section>
        </>
        


    )


}
export default ProfilePage;