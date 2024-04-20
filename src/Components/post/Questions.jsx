import React, { useRef, useState } from 'react';
import { HttpApiMethods } from '../utils/FetchUtils';
import Cookies from 'js-cookie';

const Questions = () => {
    const formRef = useRef(null);
    const [dataIsLoad, setDataIsLoad] = useState(false);
    const [curentUser, setCurentUser] = useState(null);

    let post = async (event) => {
        event.preventDefault();
        const httpApiMethods = new HttpApiMethods();
        const user_id = Cookies.get('userData')
        let formData = new FormData(formRef.current);



        if (!formData.get('fio') || !formData.get('avatar') || !formData.get('userId') || !formData.get('text') || !formData.get('meetingId')) {
            console.error('Ошибка: Не все поля формы заполнены');
            return;
        }

        setDataIsLoad(false);
        httpApiMethods.PostQuestions(formData).then(response => {
            console.log(response)
            setDataIsLoad(true);
            meets_id = '9c69d5e7-74ec-4f92-af3a-fef7d30c55bb'
            // let user_id = response.data.id;
            // console.log(response)
            // console.log(user_id)
        });
       
    }

    return (
        <div>
            <h2>Создание Questions, получение ID в Cookies</h2>
            <div>{dataIsLoad ? "Данные успешно загружены" : ""}</div>
            <form ref={formRef} action=''>
                
                {/* <input type="text" placeholder='userId' name={Cookies.get('userData')} /> */}
                <input type="text" placeholder='userId' name='userId' value={Cookies.get('userId')} />
                <input type="text" placeholder='text' name='text' />
                <input type="text" placeholder='meetingId' name='meetingId' value={'9c69d5e7-74ec-4f92-af3a-fef7d30c55bb'} />
                <button onClick={post}>Create</button>
            </form>
        </div>
    );
}

export default Questions;
