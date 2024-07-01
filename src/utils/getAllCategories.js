async function getAllCategories(){

    const responseData = await fetch("http://localhost:8083/api/categories");
    const allCategories =  await responseData.json();
    return  allCategories;
        
}

export default getAllCategories