

const {MONGO_URI} =require('../evn')
const {MongoClient}=require('mongodb')
const {BLOG_DB,BLOGS_COL} =require('../contants')
let blogs =[];
const Getblog =(req, res) =>


   {res.status(200).send(blogs);};






// const PostBlog= async(req, res) => {
//     //console.log(req.body);
//     const { body } = req;
//     // Extracts 'author' and 'content' from 'body
//       const { author, content } = body;
//       // const client=new MongoClient(MONGO_URI)
    
//       // if (author && content) {
//       //   blogs.push({ author, content });
//       //   res.send("OK");
//       //   return;
//       // }
//       // res.status(400).send("!OK");
    
//       if(!( author && content )){
//         return res.status(400).send();
//       }
//       const client = new MongoClient(MONGO_URI);


//       try{
// const blogDb=client.db(BLOG_DB);
// const blogs =blogDb.collection(BLOGS_COL);
// const result =await blogs.insertOne({author,content})
// console.log(`inserted ${{author,content}} into blogs.with _id ${resultinsertedId}`);
// result.status(200).json({_id:result.insertedId}).send();
//       }
//       catch(err){
//         console.log(err)
//         res.status(500).send()
//       }
//      finally{
//       await client.close();
//      }
    

//  }

const PostBlog = async (req, res) => {
  //   console.log(req.body);
  const { body } = req;

  const { author, content } = body;
  if (!(author && content)) {
    return res.status(400).send();
  }

  const client = new MongoClient(MONGO_URI);

  try {
    const blogdb = client.db(BLOG_DB);
    const blogs = blogdb.collection(BLOGS_COL);

    const result = await blogs.insertOne({ author, content });
    console.log(
      `inserted ${{ author, content }} into blogs. with _id ${ result.insertedId }`
    );

    res.status(201).json({ _id: result.insertedId }).send();
  } catch (error) {
    console.error(err);
    res.status(500).send();
  } finally {
    await client.close();
  }
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