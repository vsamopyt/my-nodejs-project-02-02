import express from "express";
const app = express();

// app.get('/', (req, res)=>{
//     res.json({
//         message: 'Hello world!',
//       });
// });

app.get('/', (req, res) => {
    res.json({
      message: 'Hello world!',
    });
  });


app.get("/contacts", (reп, res) =>{
res.send("<h1>Contacts page</h1>");
});

app.listen(4000, ()=>{console.log("server is working on 4000 PORT");});


