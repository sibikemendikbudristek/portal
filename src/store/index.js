import axios from 'axios';
import {selector} from 'recoil';
import { base_url } from '../utils';

const isLoggin = JSON.parse(localStorage.getItem("user-info"));

export const authenticatedUser = selector({
    key: 'authenticated-user',
    get: async () => {
        let user = null;

        try{
            let {data} = await axios.get(`${base_url}/api/user/getProfile`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    Authorization: isLoggin.data.token,
                  },
            });
            user = { user: data.result }
        }catch(error){
            user = { user: error.message }
        }

        console.log(user)
        return user;
    }
})