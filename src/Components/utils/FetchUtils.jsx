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

  GetUser = async (id) => {
    let innerUrl = this.APIURL + `/members/user/${id}/`;

    const response = await axios.get(innerUrl, {
      
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
   });
    return response.data;
  }

  
  GetUsers = async (limit, offset) => {
    let innerUrl = this.APIURL + `/members/user/?limit=${limit}&offset=${offset}`;

    const response = await axios.get(innerUrl, {
      
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      }
   });
    return response.data;
  }
  SetNewUser = async (userData) => {
    let innerUrl = this.APIURL + `/members/user/`;
    console.log(userData);
   const response = await axios.post(innerUrl, userData, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    }
  });
  console.log(response.data)
    return response.data;
  }
  
 
}

