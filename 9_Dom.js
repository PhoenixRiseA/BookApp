    function saveToLocalStorage(event) {
        event.preventDefault();
        var name = event.target.username.value;
        var email = event.target.email.value;
        var phonenumber = event.target.phonenumber.value;
        
        const obj = {
            name,
            email,
            phonenumber
        }
        localStorage.setItem(obj.email,JSON.stringify(obj));
    
        showUsers(obj);
    }
    
    
    
    window.addEventListener("DOMContentLoaded", ()=>{
        var localStorageObj = localStorage;
        var localStorageKeys = Object.keys(localStorageObj)

        for(let i=0; i< localStorageKeys.length; i++){
            var key = localStorageKeys[i];
            var userDetailsString = localStorageObj[key];
            var userDetailsObj = JSON.parse(userDetailsString);
            showUsers(userDetailsObj)
        }
    })

    function showUsers(user){

        document.getElementById('email').value = '';
        document.getElementById('username').value = '';
        document.getElementById('phonenumber').value = '';

        

        var parentNode = document.getElementById("listOfUsers");
        var childHTML = `<li id = ${user.email}>${user.name} - ${user.email}<button onclick=deleteUser('${user.email}')>X</button><button onclick=editUser('${user.email}','${user.name}','${user.phonenumber}')>edit</button></li>`;
        parentNode.innerHTML = childHTML + parentNode.innerHTML;
    }

    // deleteUser
    function deleteUser(email){
        console.log(email);
        localStorage.removeItem(email);
        removeUserFromScreen(email);
    }

    function removeUserFromScreen(email){
        var parentNode = document.getElementById('listOfUsers');
        var childNodeToBeDeleted = document.getElementById(email);

        parentNode.removeChild(childNodeToBeDeleted)
    }

    function editUser(email, name, phonenumber){
        document.getElementById('email').value = email;
        document.getElementById('username').value = name;
        document.getElementById('phonenumber').value = phonenumber;
        
        deleteUser(email);
        
        
    }
