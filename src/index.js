
import './index.css';
import {getUsers, deleteUser} from './api/userApi';
 

//Populate table of users via API call
getUsers().then(users => {
  let usersBody = "";
  users.forEach(user => {
    usersBody += `
          <tr>
            <td><a href=# data-id="${user.id}" class="deleteUser">Delete User</a></td>
            <td>${user.id}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
          </tr>
    `
  });
  global.document.getElementById('users').innerHTML = usersBody;
});

const deleteLinks = global.document.getElementsByClassName('deleteLinks');

//Must use array.from to create  a real aaray from a DOM collection.
//getElementsByClassName only returns an 'an array-like' object

Array.from(deleteLinks, link =>{
  link.onclick = function(event){
    event.preventDefault();
    const element = event.target;
    
    deleteUser(element.attributes['data-id'].value);
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
    
  };
})
