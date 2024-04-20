import React, { useRef, useState } from 'react';
import { HttpApiMethods } from '../utils/FetchUtils';
import Cookies from 'js-cookie';

export const PostUserModerator = () => {
    return (
        <div>
            
        </div>
    );
}


const Users = () => {
    const formRef = useRef(null);
    const [dataIsLoad, setDataIsLoad] = useState(false);
    const [curentUser, setCurentUser] = useState(null);

    let post = async (event) => {
        event.preventDefault();
        const httpApiMethods = new HttpApiMethods();
        let formData = new FormData(formRef.current);

        if (!formData.get('fio') || !formData.get('avatar') || !formData.get('username') || !formData.get('specialities') || !formData.get('email') || !formData.get('telegramBotUrl')) {
            console.error('Ошибка: Не все поля формы заполнены');
            return;
        }

        setDataIsLoad(false);
        httpApiMethods.PostUsers(formData).then(response => {
            console.log(response)
            setDataIsLoad(true);
            // let user_id = response.data.id;
            // console.log(response)
            // console.log(user_id)
            Cookies.set('userId', response.id);
            Cookies.set('token', response.token)
            // return user_id
        });
    }

    return (
        <div>
            <h2>Создание пользователя, получение ID в Cookies</h2>
            <div>{dataIsLoad ? "Данные успешно загружены" : ""}</div>
            <form ref={formRef} action=''>
                <input type="text" placeholder='fio' name='fio' />
                <input type="file" placeholder='avatar' name='avatar' />
                <input type="text" placeholder='username' name='username' />
                <input type="email" placeholder='email' name='email' />
                <input type="text" placeholder='specialities' name='specialities' />
                <input type="text" placeholder='telegramBotUrl' name='telegramBotUrl' />
                <button onClick={post}>Create</button>
            </form>
        </div>
    );
}

export default Users;
