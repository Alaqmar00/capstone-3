import express from "express";
import ejs from "ejs";
import bodyparser from "body-parser";
import path from "path";
import {dirname} from "path";
import { fileURLToPath } from "url";
 const app = express();
 const port = 3000;
 app.set("view engine" , 'ejs');
 app.use(express.urlencoded({extended:true}));

const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(_dirname, 'public'))); 

let post = [];
app.get("/" , (req , res)=>{
    res.render("index.ejs" , {
        post
    });
});

app.post("/post" , (req ,res)=>{
    const newpost = req.body.post;
    post.push(newpost);
    res.redirect("/"); 
});

app.post("/delete" , (req, res)=>{
    if(post.length > 0){
        post.pop();
    }
    res.redirect("/");
});

 app.listen(port , ()=>{
    console.log(`server is running on ${port}`);
 });