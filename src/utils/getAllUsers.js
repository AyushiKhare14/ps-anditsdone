
async function getAllUser(){

    const responseData = await fetch("http://localhost:8083/api/users");
    const allUsers =  await responseData.json();
    return  allUsers;
        
}

export default getAllUser