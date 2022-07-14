const request = require("request");
const url =
  "https://newsapi.org/v2/top-headlines?country=eg&apiKey=1793ba52292d42db836593475cbb5e88";

// const { hasSubscribers } = require('diagnostics_channel')
const express = require("express");
const { response } = require("express");
const path = require("path");
const publicDirectory = path.join(__dirname, "../public");
const app = express();
const port = process.env.PORT || 3020;

const viewsPath = path.join(__dirname, "../views");
app.set("views", viewsPath);
const hbs=require('hbs')
app.set('view engine','hbs')


app.get("/", (req, res) => {
  request(
    {
      url,
      json: true,
      headers: {
        "User-Agent": "MY IPHINE 7s",
      },
    },
    (error, response) => {
        // console.log(res.body.articles)
      if (error) {
        console.log("Erroor Occurred");
      } else if (response.body.status == "error") {
        console.log("Invalid Api key");
      } else {
        // console.log('in else')
        
          res.render("index", {
            title: response.body
            // description: response.body.articles.description,
            // image: response.body.urlToImage,
          })
      } },
  );
});



// const partialsPath=path.join(__dirname,'../views/partials')
// hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectory));
app.listen(port, () => {
  console.log(`App Listening to the port ${port}`);
});

// app.get('/h',(req,res)=>
// {
//  req({url,json:true},()=>{

//     try {
//         res.render('news', { articles : res.body.message })
//     }
//     catch (error) {
//         if(error.response) {
//             console.log(error.response.data)
//         } else if(error.request) {
//             console.log(error.request)
//         } else {
//             console.log('Error', error.message)
//         }
//     }
// })
// })
// request({url,json:true},(error,response)=>{
//         //    /* Invalid Link :low  level error (law aslan mawsltlhash maslan ,
//         //     * moshkela f net
//         //     *  */
//            if(error){
//             console.log('Eroor has occured')
//            }})
//            // api --> invalid data

// app.set('view engine','hbs')
// app.get('/help',(req,res)=>{
//     res.render('help' ,{
//         //data
//         title:'Help page hbsss',
//         name:'Osama', test:'neewww'
//     })
// })

// app.get('*' ,(req,res)=> {
//     res.render('404',{
//     Message: '404 Not FOUND'})
// })
