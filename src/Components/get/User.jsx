import React from 'react';
import { HttpApiMethods } from '../utils/FetchUtils';
import Cookies from 'js-cookie';

const User = () => {
    let id = '9c69d5e7-74ec-4f92-af3a-fef7d30c55bb'
    // Cookies.set('userId')
    const user = new HttpApiMethods().GetUsers(id)

    if (!Array.isArray(user)) {
        return <p>Неверный тип данных с сервера!</p>
    }

    return (
        <div>
            {user.map((item, index) => (
                
                <div key={index}>
                    <p>{item.id}</p>
                    <img src={item.avatarUrl} alt={item.avatarUrl}/>
                    <p>{item.fio}</p>
                    <p>{item.specialities}</p>
                    <a>{item.telegramBotUrl}</a>
                    <p>{item.level}</p>
                    <p>{item.userName}</p>
                    <p>{item.normalizedUserName}</p>
                    <p>{item.email}</p>
                    <p>{item.phoneNumber}</p>
                    <p>{item.id}</p>
                </div>
            ))}
        </div>
    );
}

export default User;
