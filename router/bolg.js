const {Router} =require('express')
const { Getblog,PostBlog,GetBlogbyId,PutbyId,PatchbyId,DeletebtID
}=require('../handlers/blog')
const blogrouter=Router();
blogrouter.get('/',Getblog)
blogrouter.post("/",PostBlog)
blogrouter.get("/:blogId",GetBlogbyId)
blogrouter.put("/:blogId",PutbyId)
blogrouter.patch("/:blogId",PatchbyId)
blogrouter.delete("/:blogId",DeletebtID)
module.exports={blogrouter}