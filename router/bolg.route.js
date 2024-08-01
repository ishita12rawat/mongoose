const {Router} =require('express')
const blogcontroller =require('../controllers/blog.controller')

const blogrouter=Router();
blogrouter.get('/',blogcontroller.blogIndex);
blogrouter.get('/new',blogcontroller.blogCreateGet);
blogrouter.post('/',blogcontroller.blogCreatePost);
blogrouter.get('/:id',blogcontroller.blogDetails);
blogrouter.get('/:id/edit',blogcontroller.blogEditGet);
blogrouter.put('/:id',blogcontroller.blogEditPut);
blogrouter.delete('/:id',blogcontroller.blogDelete);

module.exports={blogrouter}