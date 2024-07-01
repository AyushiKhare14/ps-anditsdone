function userRegistration(bodyData){


    fetch("http://localhost:8083/api/users", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Content-type": 
                  "application/json; charset=UTF-8"},
      })
      .then(response => response.json()) 
      .then(json => {
        
        if (!json.error){
           // if(!alert('New User added')){window.location.replace("./user-login.html ");}
        }
        else{
           // throw new CheckCondition("Partial filled form cannnot be submitted!");;
        }
      })
      .catch(err => {
       // if(!alert(err)){window.location.reload();}
        
      });

}

export default userRegistration