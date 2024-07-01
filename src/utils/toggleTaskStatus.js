function markCompletedBtnClicked(todoid, bodyData){

    
    fetch('http://localhost:8083/api/todos/' + todoid, {
      method: "PUT",
      body: JSON.stringify(bodyData),
      headers: {"Content-type": 
                "application/json; charset=UTF-8"},
    })
    .then(response => {
      if (response.ok) {
      response.json()}
      else{
          
      }
  }) 
    .then(json => {
    })
    .catch(err => {
      alert(err);
    }); 
}

export default markCompletedBtnClicked