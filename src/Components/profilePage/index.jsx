import Header from "../Header";
import styles from "./style.module.scss"
import avatar from '../../img/profilePage/avatar.png';

// import Users from "../post/Users";
// import EditMeetsForm from "../edit/EditMeetsForm";
// import PostForm from "../post/Meets";
// import Home from '../Home/Home';
const ProfilePage = () => {
    const users = [
        {
            id: 1,
            fullName: 'Кирсанов Дмитрий',
            status: 'Встреча состоялась',
            date: '2017-01-12 18:00',
            time: '30 минут',
            description: 'Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча',
     
         },
        {
            id: 2,
            fullName: 'Кирсанов Дмитрий',
            status: 'Встреча состоялась',
            date: '2017-01-12 18:00',
            time: '30 минут',
            description: 'Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча',
     
         },
         {
            id: 3,
            fullName: 'Кирсанов Дмитрий',
            status: 'Встреча состоялась',
            date: '2017-01-12 18:00',
            time: '30 минут',
            description: 'Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча Самая лучшая встреча',
     
         },
       ];
    return (
        <>
            <Header></Header>
            <section className={styles.profile__container}>
                <div className={styles.profile__user_container}>
                    <div className={styles.profile__user_img_container}>
                        <img src={avatar} className={styles.profile__user_img}></img>
                        <div className={styles.profile__user_role}>Участник</div>
                    </div>
                    <div className={styles.profile__user_info_container}>
                        <div className={styles.profile__user_fullName}><span>К</span>ирсанов Дмитрий </div>
                        <div className={styles.profile__user_spaciality}>Junior PHP разработчик</div>
                        <div className={styles.profile__user_email}>gmail@gmail.com</div>
                    
                    </div>
                </div>
                
            </section>
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