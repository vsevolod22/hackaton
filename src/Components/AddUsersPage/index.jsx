import styles from './style.module.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import avatar from '../../img/profilePage/avatar.png';
import Header from '../Header';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import loadingGif from '../../img/AddUsers/loading.png';
import del from '../../img/AddUsers/delete.png';
import perm from '../../img/AddUsers/permission.png';
import newAvatar from '../../img/AddUsers/newAvatar.png';
import { HttpApiMethods } from '../utils/FetchUtils';
const httpApiMethods = new HttpApiMethods()
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "46%",
    height: "60vh",
    bgcolor: 'background.paper',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
  };
    const AddUsers = () => {
        const [formData, setFormData] = useState({
            username : '',
            first_name: '',
            last_name: '',
            position: '',
            email: '',
            birth_date: ''
           });
        
        const [open, setOpen] = useState(false);
        const [loading, setLoading] = useState(false);
        const [totalPages, setTotalPages] = useState(null);
        const [users, setUsers] = useState('');
        const [userRole, setUserRole] = useState('')
        const navigate = useNavigate();
        const handleInputChange = (e) => {
            const { name, value } = e.target;
            if (name === 'email') {
              // Разделяем значение по символу '@' и берем первую часть
              const username = value.split('@')[0];
              setFormData(prevState => ({ ...prevState, username: username, [name]: value }));
            } else {
              setFormData(prevState => ({ ...prevState, [name]: value }));
            }
         };
        const GetUsersAdmin = async (limit, offset) => {

            setLoading(true);
            const response = await httpApiMethods.GetUsers(limit, offset);
            setUsers(response);
            setTotalPages(Math.ceil(response.count / 5));
            setLoading(false);
            
            // Расчет общего количества страниц
        
        
        }
        
        const handleSubmit = async (event) => {
            setLoading(true);
            event.preventDefault();
            const response = await httpApiMethods.SetNewUser(formData);
            setLoading(false)
            // Обработка ответа сервера
        };
        const handlePageChange = (event, value) => {
            const offset = (value - 1) * 5; // Предполагается, что на странице отображается 3 пользователя
            GetUsersAdmin(5, offset);
           };
            
        useEffect(() => {
    
            GetUsersAdmin(5, 0)
          
        
        }, [])
        // useEffect(() => {
        //     if (users) {
        //         console.log(users)
        //         GetUsersAdmin(2, 0)
        //         console.log(users)
        //     }
        
        // }, [users])
    const changeRole = (event) => {
        setUserRole(event.target.value)
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            


            <section className={styles.addUsers__container}>
            <Header></Header>
                <input className={styles.addUsers__search} type='text' placeholder='Найти пользователя'></input>
                <div className={styles.select__container}>
                    <select onChange={changeRole} className={styles.select} name="time__meeting">
                        {userRole === '' && <option value="">выбирите роль пользователя</option>}

                        <option value='allRoles'>Все роли</option>
                        <option value="Admin">Администратор</option>
                        <option value="User">пользователь</option>
                    </select>

                </div>
                <div className={styles.addUser__container}>
                    
                    <div className={styles.addUser__cards_container} style={loading ? {justifyContent: 'center'} : null}>
                        <div className={styles.addUser__card_container}>
                            <div onClick={handleOpen} className={styles.round}>+</div>
                            <div className={styles.addUser__card_text}>Добавить пользователя</div>
                        </div>
                        
                       {!loading ? <>
                        {users && users.results.map((user, index) => (
                            <div style={{width: '100%'}} key={index}>
                                <div onClick={() => navigate(`/profile/${user.id}`)}  className={styles.profile__user_container}>
                                    <div className={styles.profile__user_img_container}>
                                        <img src={user.avatar} className={styles.profile__user_img} alt="User avatar" />
                                        <div className={styles.profile__user_role}>Администратор</div>
                                    </div>
                                    <div className={styles.profile__user_info_about_container}>
                                        <div className={styles.profile__user_fullName}><span>{user.last_name[0]}</span>{user.last_name.slice(1)} {user.first_name}</div>
                                        <div className={styles.profile__user_spaciality}>{user.position}</div>
                                    </div>
                                    <div className={styles.profile__user_info_container}>
                                        <div className={styles.profile__user_email}>{user.email}</div>
                                    </div>
                                    <div className={styles.profile__user_info_about_container}>
                                        <div className={styles.delete_container}>
                                        <img src={del} className={styles.delete_img} alt="Delete" />
                                        </div>
                                        <div className={styles.permission_container}>
                                        <img src={perm} className={styles.permission_img} alt="Permission" />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.profile__line}></div>
                            </div>
                            
                        ))}
                        <Stack sx={{justifyContent: 'center', alignItems: 'center', width: '100%'}} spacing={2}>
                            <Pagination count={totalPages} onChange={handlePageChange} />
                        </Stack>
                       </> : <div className={styles.loading__img_container}><img className={styles.loading__img} src={loadingGif} alt='loading'></img></div>}
                        
                       
                    </div>
                   
                </div>
                <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <div className={styles.addModal__title_container}>
                                <div className={styles.addModal__title}>Добавление пользователя</div>
                                <div onClick={handleClose} className={styles.addModal__close}><div className={styles.addModal__close_img}>+</div></div>
                            </div>
                            <div  className={styles.addModal_user_container}>
                                
                                <form onSubmit={handleSubmit} className={styles.addModal_user_input_container}>
                                    <input
                                    name="first_name"
                                    placeholder='Имя пользователя'
                                    className={styles.addModal_user}
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                    />
                                    <input
                                    name="last_name"
                                    placeholder='Фамилия пользователя'
                                    className={styles.addModal_user}
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                    />
                                    {/* <input
                                    name="position"
                                    placeholder='Должность'
                                    className={styles.addModal_user}
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    /> */}
                                    {/* <select
                                    name="role"
                                    className={styles.addModal_user_select}
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    >
                                    <option value="">Выберите роль</option>
                                    <option value="Admin">Администратор</option>
                                    <option value="User">Пользователь</option>
                                    </select> */}
                                    <input
                                    name="email"
                                    placeholder='Почта'
                                    className={styles.addModal_user}
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    />
                                    <input
                                    name="birth_date"
                                    placeholder='Дата рождения'
                                    className={styles.addModal_user}
                                    value={formData.birth_date}
                                    onChange={handleInputChange}
                                    />
                                    <div className={styles.modal__question_button_container}>
                                        <button type="submit" className={styles.modal__question_button + ' ' + styles.yellow}>Добавить</button>
                                        <button onClick={handleClose} className={styles.modal__question_button + ' ' + styles.gray}>Отменить</button>
                                    </div>
                                </form>
                            </div>
                        </Box>
                    </Modal>
                   
            </section>

        </>
        

    )
}
export default AddUsers;