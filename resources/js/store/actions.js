export const actions = {
    allCategoryFromDatabase:(context)=>{
        axios.get("api/category")
             .then((response)=>{
                console.log(response.data.categories)
                context.commit("categories",response.data.categories) //categories will be run from mutation
             })
             .catch(()=>{ 
                console.log("Error..!")  
             });
     },
     // add new functions here
}