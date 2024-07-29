const {Router} =require('express')
const { Getblog,PostBlog,GetBlogbyId,PutbyId,PatchbyId,DeletebtID
}=require('../handlers/blog')
const blogrouter=Router();
blogrouter.get('/blog',Getblog)
blogrouter.post("/blog",PostBlog)
blogrouter.get("/blog/:blogId",GetBlogbyId)
blogrouter.put("/blog/:blogId",PutbyId)
blogrouter.patch("/blog/:blogId",PatchbyId)
blogrouter.delete("/blog/:blogId",DeletebtID)
module.exports={blogrouter}