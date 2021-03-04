
import getBaseUrl from './baseUrl'
//import 'whatwg-fetch';
const baseUrl = getBaseUrl();

 export function getUsers(){
    return get('users');
}
function get(url){
    return fetch(baseUrl + url).then(res => res.json()).catch(err => console.log(err)); //eslint-disable-line no-console
}
    
//function onSuccess(response){
//    response.json();
//}
//function onError(error){
//    console.log(error); //eslint-disable-line no-console
//}
export function deleteUser(id){
    return del(`users/${id}`);
}

function del(url){
    const request = new Request(baseUrl + url, {
        method : 'DELETE'
    })
    return fetch(request).then(res => res.json()).catch(err => console.log(err));//eslint-disable-line no-console
}
