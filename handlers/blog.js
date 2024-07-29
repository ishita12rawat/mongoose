
let blogs =[];

const Getblog =(req, res) => {res.status(200).send(blogs);};

const PostBlog= (req, res) => {
    //console.log(req.body);
    const { body } = req;
    // Extracts 'author' and 'content' from 'body
      const { author, content } = body;
    
      if (author && content) {
        blogs.push({ author, content });
        res.send("OK");
        return;
      }
      res.status(400).send("!OK");
    
 };


    const GetBlogbyId= (req, res) => {
        let { blogId } = req.params;
  console.log(blogId);

  if (blogId > 0 && blogId <= blogs.length) {
    blogId -= 1;
    const blogToReturn = blogs[blogId];
    return res.status(200).json(blogToReturn).send();
  }
  //   res.json(blogs).send();
  res.status(404).send();

    }


    const PutbyId= (req, res) => {
        let { author, content } = req.body;
  let { blogId } = req.params;
  if (blogId > 0 && blogId <= blogs.length && author &&content) {
    blogId -= 1;
    blogs[blogId] = {author, content};
    return res.status(200).send();
  }
    };
const PatchbyId= (req, res) => {
    const {author,content} = req.body;
    let {blogId} = req.params;
    if (blogId > 0 && blogId <= blogs.length && (author||content)) {
      blogId -= 1;
      // if(author)blogs[blogId].author = author;
      // if(content)blogs[blogId].content = content;
      blogs[blogId]={...blogs[blogId],author,content}
  return res.status(200).send();
      // blogs[blogId] = {author,content};
    }
      return res.status(404).send();
    }


const DeletebtID= (req, res) => {
    let{blogId} = req.params;
   
    if (blogId > 0 && blogId <= blogs.length) {
      blogId -= 1;
      
      blogs.splice(blogId,1);
      // blogs[blogId] = {author,content};
  
      return res.status(200).send();
    }
    return res.status(404).send();
};


module.exports={Getblog,PostBlog,GetBlogbyId,PutbyId,PatchbyId,DeletebtID};