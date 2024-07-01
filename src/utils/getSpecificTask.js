async function getSpecificTask(taskid){

    const responseData = await fetch("http://localhost:8083/api/todos/" + taskid);
    const specificTask =  await responseData.json();
    return  specificTask;
        
}

export default getSpecificTask