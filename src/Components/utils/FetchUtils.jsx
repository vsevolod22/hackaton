/* eslint-disable no-unused-vars */
import axios from "axios"
import { useState } from "react"
import './style.css'
import { Cookie } from "@mui/icons-material"



export class HttpApiMethods {

  token;
  constructor() {
    this.token = localStorage.getItem('token');
  
  }
  // URL`s
  user_id = '17e5fc7a-8f22-4c0b-8b33-5dc3a6937561'
  APIURL = "http://26.189.225.172:8000/api"
  APIURL_FILES = "https://cyberbloom.zetcraft.ru/api/cyber-boom-files/"
  // получение мероприятий по ID
  GetAuthUser = async (email) => {

    let innerUrl = this.APIURL + `/auth/login/`

    const response = await axios.post(innerUrl, {
      email: email
   }, {
      headers: {
        'Content-Type': 'application/json',
        
      }
   });
    return response.data;
  }



  // 
  //  Получение всех мероприятий
  // 
  GetUsers = async (limit, offset) => {
    let innerUrl = this.APIURL + `/members/user/?limit=${limit}&offset=${offset}`;

    const response = await axios.get(innerUrl, {
      Authorization: `Bearer ${this.token}`
   }, {
      headers: {
        'Content-Type': 'application/json',
        
      }
   });
    return response.data;
  }
  
  // Создание мероприятия
  AddMeetings = async (data) => {
    let innerUrl = this.APIURL + `/meetings`;

    let response = await axios.postForm(innerUrl, data); //
    return response.data;

  }
  // Редактирование уже существующего мероприятия
  EditMeetings = async (data) => {
    let innerUrl = this.APIURL + `/meetings`;
    let response = await axios.putForm(innerUrl, data); //
    return response.data;
  }

  // Удалить мероприятие, пока что не реализовано
  DeleteMeetings = async (id) => {
    let innerUrl = this.APIURL + `/meetings?id=${id}`

    const response = await axios.get(innerUrl) //

    return response.data;
  }



  // 
  // Users
  // 
 
}





const FetchUtils = async () => {
  const httpApiMethods = new HttpApiMethods() // Создание экземпляра класса HttpApiMethods

  const meets = await httpApiMethods.GetMeetings()
  const [user, setUser] = useState([])

  // async function getData() {
    // const response = await axios.get()
    // console.log(response.data)
    // setUser(response.data)
  // }

  const removeList = () => {
    setUser([])
  }

  return (
    <>

      <button onClick={removeList}>Click to Remove Data Listing</button>
      {/* Mapping of data */}
      <div>
        {Array.isArray(meets) ? (
          <ul>
            {meets.map((item) => (
              <ol key={item.id}>
                <li>{item.title}</li>
                <li>{item.time}</li>
                <li>{item.speakerName}</li>
                <li>{item.speackerImage}</li>
                <li>{item.splecializations}</li>
                <li>{item.type}</li>
                <li>{item.speakerTelephone}</li>
                <li>{item.speakerEmail}</li>
                <li>{item.tags}</li>
                <li>{item.videoUrl}</li>
              </ol>
            ))}
          </ul>
        ) : (
          <p>Bad data type from server!</p>
        )}
      </div>
    </>
  );
}
export default FetchUtils;