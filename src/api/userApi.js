
//import 'whatwg-fetch';

 export function getUsers(){
    return get('users');
}
function get(url){
    return fetch(url).then(res => res.json()).catch(err => console.log(err));
}
    
//function onSuccess(response){
//    response.json();
//}
//function onError(error){
//    console.log(error); //eslint-disable-line no-console
//}
