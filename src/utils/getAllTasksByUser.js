async function getAllTasksByUser(userid){

    const responseData = await fetch("http://localhost:8083/api/todos/byuser/" + userid);
    const userTasks =  await responseData.json();
    return  userTasks;
        
}

export default getAllTasksByUser