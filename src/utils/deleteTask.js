function deleteTask(todoid){
    fetch('http://localhost:8083/api/todos/' + todoid, {
      method: "DELETE",
   })
}

export default deleteTask