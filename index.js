import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 2084;

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

let savedData=[];
let postIdCounter= 1;

app.get("/", (req,res) =>{
  res.render("Home.ejs",{savedData:savedData})
  })
app.get("/about", (req,res) =>{
  res.render("about.ejs")
})
app.get("/compose", (req,res) =>{
  res.render("compose.ejs")
})
app.get("/contact", (req,res) =>{
 res.render("contact.ejs")
})
app.get("/post/:postId",(req,res) =>{
const postId= req.params.postId;
const post=savedData.find(p => p.id==postId)

res.render("post.ejs",{savedData:post})

})


app.post("/compose", (req,res) =>{
  const { titleInput, myPost } = req.body;
  const newData = {
    id: postIdCounter++,
    titleInput,
    myPost,
  };
  savedData.push(newData);
  res.redirect("/");


})











app.listen(port, () =>{
  console.log("App is running on " + port)
});
