import styles from './style.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import avatar from '../../img/profilePage/avatar.png';
import Header from '../Header';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import del from '../../img/AddUsers/delete.png';
import perm from '../../img/AddUsers/permission.png';
import newAvatar from '../../img/AddUsers/newAvatar.png';

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
    const [open, setOpen] = useState(false);
    const [userRole, setUserRole] = useState('')
    const navigate = useNavigate();
    const users = [
        {
           avatar: avatar,
           id : 1,
           role: 'Участник',
           fullName: 'Кирсанов Дмитрий',
           speciality: 'Junior PHP разработчик',
           email: 'gmail1@gmail.com',
           del: del,
           perm: perm
        },
        {
            avatar: avatar,
            id: 2,
            role: 'Участник',
            fullName: 'Кирсанов Дмитрий',
            speciality: 'Junior PHP разработчик',
            email: 'gmail1@gmail.com',
            del: del,
            perm: perm
         },
         {
            avatar: avatar,
            id: 3,
            role: 'Участник',
            fullName: 'Кирсанов Дмитрий',
            speciality: 'Junior PHP разработчик',
            email: 'gmail1@gmail.com',
            del: del,
            perm: perm
         },
       ];
    const changeRole = (event) => {
        setUserRole(event.target.value)
    }
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Header></Header>


            <section className={styles.addUsers__container}>
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
                    <div className={styles.addUser__cards_container}>
                        <div className={styles.addUser__card_container}>
                            <div onClick={handleOpen} className={styles.round}>+</div>
                            <div className={styles.addUser__card_text}>Добавить пользователя</div>
                        </div>
                        <div className={styles.profile__user_container}>
                            <div className={styles.profile__user_img_container}>
                                <img src={avatar} className={styles.profile__user_img}></img>
                                <div className={styles.profile__user_role}>Пользователь</div>
                            </div>
                            <div className={styles.profile__user_info_about_container}>
                                <div className={styles.profile__user_fullName}><span>К</span>ирсанов Дмитрий </div>
                                <div className={styles.profile__user_spaciality}>Junior PHP разработчик</div>
                            </div>
                            <div className={styles.profile__user_info_container}>
                                
                               

                                <div className={styles.profile__user_email}>gmail@gmail.com</div>
                                
                            </div>
                            <div className={styles.profile__user_info_about_container}>
                                <div className={styles.delete_container}><img src={del} className={styles.delete_img}></img></div>
                                <div className={styles.feautures}>Отправлено</div>
                            </div>
                            
                        </div>
                        <div className={styles.profile__line}></div>
                        
                       
                        {users.map((user, index) => (
                            <div style={{width: '100%'}} key={index}>
                                <div onClick={() => navigate(`/profile/${user.id}`)}  className={styles.profile__user_container}>
                                    <div className={styles.profile__user_img_container}>
                                        <img src={user.avatar} className={styles.profile__user_img} alt="User avatar" />
                                        <div className={styles.profile__user_role}>{user.role}</div>
                                    </div>
                                    <div className={styles.profile__user_info_about_container}>
                                        <div className={styles.profile__user_fullName}><span>{user.fullName[0]}</span>{user.fullName.slice(1)}</div>
                                        <div className={styles.profile__user_spaciality}>{user.speciality}</div>
                                    </div>
                                    <div className={styles.profile__user_info_container}>
                                        <div className={styles.profile__user_email}>{user.email}</div>
                                    </div>
                                    <div className={styles.profile__user_info_about_container}>
                                        <div className={styles.delete_container}>
                                        <img src={user.del} className={styles.delete_img} alt="Delete" />
                                        </div>
                                        <div className={styles.permission_container}>
                                        <img src={user.perm} className={styles.permission_img} alt="Permission" />
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.profile__line}></div>
                            </div>
                            
                        ))}
                        <Stack sx={{justifyContent: 'center', alignItems: 'center', width: '100%'}} spacing={2}>
                            <Pagination count={10} />
                        </Stack>
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
                            <div className={styles.addModal_user_container}>
                                <div className={styles.addModal_user_img_container}>
                                <form className={styles.addModal_form} method="post" encType="multipart/form-data">
                                    <div className={styles.input_file_row}>
                                        <label className={styles.input_file}>
                                            <input type="file" name="file[]" multiple accept="image/*"/>	
                                            <span><img src={newAvatar}></img></span>
                                        </label>
                                        <div className={styles.input_file_list}></div>  
                                    </div>
                                </form>
                                </div>
                                <div className={styles.addModal_user_input_container}>
                                    <input placeholder='ФИО специалиста' className={styles.addModal_user}></input>
                                    <input placeholder='Должность' className={styles.addModal_user}></input>
                                    <select className={styles.addModal_user_select}>
                                        <option>Пользователь</option>
                                        <option>Администратор</option>
                                    </select>
                                    <input placeholder='Почта' className={styles.addModal_user}></input>
                                    <input placeholder='Дата рождения' className={styles.addModal_user}></input>
                                    <div className={styles.modal__question_button_container}>
                                        <button className={styles.modal__question_button + ' ' + styles.yellow}>Добавить</button>
                                        <button className={styles.modal__question_button + ' ' + styles.gray}>Отменить</button>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Modal>
                   
            </section>

        </>
        

    )
}
export default AddUsers;