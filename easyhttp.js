class EasyHTTP{
    // Make a get request
    async get(url){
        const response=await fetch(url);
        const responseData=await response.json();
        return responseData;
        
    }
    // Make a post request 

   async post(url,data){
        
           const response= await fetch(url,{
                method:'POST',
                headers:{
                    'Content-type':'application/json'
                },body:JSON.stringify(data)
            })

        
        const responseData=await response.json();
        return responseData;
        
    }
    // Make a put request
   async put(url,data){
        
           const res=await fetch(url,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },body:JSON.stringify(data)
            })
            const resData=await res.json();
            return resData;

        
        
    }

    // Make a delete request
    async delete(url){
        
        const res=await fetch(url,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
            });
            const resData=await 'Resource Deleted';
            return resData;

        
        
    }
}