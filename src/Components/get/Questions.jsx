import React from 'react';
import { HttpApiMethods } from '../utils/FetchUtils';

const httpApiMethods = new HttpApiMethods




export const GetQuestions = async () => {
    const questions = await httpApiMethods.GetQuestions()

    return (
        <div>
            <div>
            {Array.isArray(questions) ? (
                questions.map((item, index) => (
                    <div key={index}>
                        <div>{item.id}</div>
                        <div>{item.text}</div>
                        <div>{item.meetingId}</div>
                        <div>{item.userId}</div>
                    </div>
                    ))
                    ) : (
                        <p>Неверный тип данных с сервера!</p>
                    )}
            </div>
        </div>
    );
}

const GetQuestionsByID = async (id) => {
    const question = await httpApiMethods.GetByIDQuestions(id)

    return (
        <div>
            {Array.isArray(question) ? (
                question.map((item, index) => (
                    <div key={index}>
                        <div>{item.id}</div>
                        <div>{item.text}</div>
                        <div>{item.meetingId}</div>
                        <div>{item.userId}</div>
                    </div>
                    ))
                    ) : (
                        <p>Неверный тип данных с сервера!</p>
                    )}
        </div>
    );
}

export default GetQuestionsByID;
