import React, { useRef, useState } from 'react';
import { HttpApiMethods } from '../utils/FetchUtils';
import Cookies from 'js-cookie';


const PostForm = () => {
    const formRef = useRef(null); // Добавление этой строки
    const [dataIsLoad, setDataIsLoad] = useState(false)

    let post = async () => {
        const token = Cookies.get('token')
        const httpApiMethods = new HttpApiMethods();
        let formData = new FormData(formRef.current); // Изменение этой строки
        setDataIsLoad(false)
        const updatedMeets = httpApiMethods.AddMeetings(formData, token)
        .then(
            () => {
                setDataIsLoad(true)
                
            }
        )
        
    }

    return (
        <div>
            <h2>Создать мероприятие</h2>
            <div>{dataIsLoad ? "ДАнные успешно загрузилисб" : ""}</div>
            <form ref={formRef} action=''>
                <input type="text" placeholder='title' name='title'/>
                <input type="text" placeholder='time' name='time'/>
                <input type="text" placeholder='theme' name='theme'/>
                <input type="text" placeholder='speakerName' name='speakerName'/>
                <input type="file" placeholder='speackerImage' name='speackerImage'/>
                <input type="file" placeholder='placeImages' name='placeImages'/>
                <input type="text" placeholder='splecializations' name='splecializations'/>
                <input type="text" placeholder='speakerEmail' name='speakerEmail'/>
                <input type="text" placeholder='type' name='type'/>
                <input type="text" placeholder='SpeakerTelephone' name='speakerTelephone'/>
                <input type="text" placeholder='tags' name='tags'/>
                <input type="text" placeholder='urls' name='urls'/>
                <input type="text" placeholder='placeAdress' name='placeAdress'/>
                <input type="text" placeholder='duration' name='duration'/>
                <button onClick={post}>Create</button>
                </form>
        </div>
    );
}

export default PostForm;
