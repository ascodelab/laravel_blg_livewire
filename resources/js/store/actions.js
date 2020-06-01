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
     // get article data
     fetchArticleData:(context)=>{
      axios.get("api/article")
           .then((response)=>{
              console.log(response.data.article)
              context.commit("article",response.data.article) //categories will be run from mutation
           })
           .catch(()=>{ 
              console.log("Error..!")  
           });
   },
     // add new functions here
}