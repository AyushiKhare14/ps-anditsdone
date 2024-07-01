
function submitNewTask(bodyData){
    //let navigate = useNavigate();

    fetch("http://localhost:8083/api/todos", {
        method: "POST",
        body: JSON.stringify(bodyData),
        headers: {"Content-type": 
                  "application/json; charset=UTF-8"},
      })
      .then(response => {
        if (response.ok) {
        response.json()}
        else{
            throw new Error('Partially filled form cannot be submitted!');
        }
    }) 
      .then(json => {
 
        //if(!alert("Task Added Successfully")){navigate("/userhomepage")}
      })
      .catch(err => {

        //if(!alert(err)){window.location.reload();}
      }); 
}

export default submitNewTask