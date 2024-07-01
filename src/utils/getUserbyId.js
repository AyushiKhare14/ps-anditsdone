async function getUserbyId(userid){

    const responseData = await fetch("http://localhost:8083/api/users/" + userid);
    const user =  await responseData.json();
    return  user;
        
}

export default getUserbyId