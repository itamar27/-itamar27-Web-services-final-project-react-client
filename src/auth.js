import { URL } from './constants';
import axios from 'axios';


const auth = async (token, setUser, history) => {
    axios.post(URL + `auth/login`, { token }, { withCredentials: true, credentials: 'include' })
        .then(res => {
            const user = res.data.user;
            const url = res.data.url;
            const data = {
                id: user.id,
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                role: user.role
            };

            if (res.data.user) {
                setUser(data)


                if (window.location.pathname === "/") {
                    history.push({
                        pathname: `${url}`,
                        state: data,
                    });
                }
            }
        })
        .catch(err => console.log(err))
};

export default auth;