import React, { useRef, useState, useEffect } from 'react';
import { HttpApiMethods } from '../utils/FetchUtils';

const EditMeetsForm = () => {
    const formRef = useRef(null);
    const [dataIsLoad, setDataIsLoad] = useState(false);
    const httpApiMethods = new HttpApiMethods();

    const post = async (event) => {
        event.preventDefault(); // Предотвращение действия по умолчанию
        let formData = new FormData(formRef.current);
        setDataIsLoad(false);
        const updatedMeets = await httpApiMethods.EditMeetings(formData);
    };

    const handleData = (data) => {
        if (Array.isArray(data) && data.length > 0) {
            setData(data);
        } else {
            setData([]);
            console.error('Неверный тип данных с сервера!');
        }
    };

    const fetchData = async () => {
        try {
            const data = await httpApiMethods.GetMeetings();
            handleData(data);
        } catch (error) {
            console.error(error);
        }
    };

    const [data, setData] = useState([]);
    const [selectedId, setSelectedId] = useState('');
    const [selectedData, setSelectedData] = useState(null);

    const handleDataClick = (id) => {
        const selected = data.find((item) => item.id === id);
        setSelectedData(selected);
    };

    const handleChange = (event) => {
        setSelectedId(event.target.value);
        const selected = data.find((item) => item.id === event.target.value);
        setSelectedData(selected);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const FillInputs = () => {
        httpApiMethods.GetByID()
    }

    return (
        <div>
            <h2>Редактирование мероприятий</h2>
            <div>{dataIsLoad ? "Данные успешно загружены" : ""}</div>

            <ul>
                {Array.isArray(data) && data.length > 0 ? (
                    data.map((item, index) => (
                        <button style={{ border: '1px solid black' }} onClick={() => handleDataClick(item.id)} key={index}>
                            {/* {item.id} */}
                            <div>{item.title}</div>
                        </button>
                    ))
                ) : (
                    <p>Неверный тип данных с сервера!</p>
                )}
            </ul>
            {/* автозаполнение инпутов */}
            {selectedData && (
                <>
                    <form ref={formRef}>
                        <select name="id" value={selectedData.id} onChange={handleChange}>
                            {data.map((item) => (
                                <option key={item.id} value={item.id}>
                                    {item.id}
                                </option>
                            ))}
                        </select>
                        {/* <input type="text" placeholder='id'  name='id' value={selectedData.id} onChange={handleChange} /> */}
                        <input type="text" placeholder='name' name='title' value={selectedData.title} onChange={handleChange} />
                        <input type="text" placeholder='time' name='time' value={selectedData.time} onChange={handleChange} />
                        <input type="text" placeholder='theme' name='theme' value={selectedData.theme} onChange={handleChange} />
                        <input type="text" placeholder='speakerName' name='speakerName' value={selectedData.speakerName} onChange={handleChange} />
                        <input type="file" placeholder='speackerImage' name='speackerImage' onChange={handleChange} />
                        <input type="file" placeholder='placeImages' name='placeImages' onChange={handleChange} />
                        <input type="text" placeholder='splecializations' name='splecializations' value={selectedData.splecializations} onChange={handleChange} />
                        <input type="text" placeholder='speakerEmail' name='speakerEmail' value={selectedData.speakerEmail} onChange={handleChange} />
                        <input type="text" placeholder='tags' name='tags' value={selectedData.tags} onChange={handleChange} />
                        <input type="text" placeholder='SpeakerTelephone' name='speakerTelephone' value={selectedData.speakerTelephone} onChange={handleChange} />
                        <input type="text" placeholder='type' name='type' value={selectedData.type} onChange={handleChange} />
                        <input type="text" placeholder='urls' name='urls' value={selectedData.urls} onChange={handleChange} />
                        <input type="text" placeholder='placeAdress' name='placeAdress' value={selectedData.placeAdress} onChange={handleChange} />
                        <input type="text" placeholder='duration' name='duration' value={selectedData.duration} onChange={handleChange} />
                        <button onClick={post}>Edit</button>
                    </form>
                </>
            )}

        </div>
    );
};

export default EditMeetsForm;
