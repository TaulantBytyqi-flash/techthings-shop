
import { setCookie } from "./cookies"
import { setLocalStorage } from "./localStorage";


//Cookie function per Authentikim 
export const setAuthentication = (token, user) => {
    setCookie('token', token);
    setLocalStorage('user', user);
}