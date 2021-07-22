


/*createConnection().then(connection => {
    let user = new User();
    user.firstName = "melikşah";
    user.lastName = "gürcü";
    user.age = 25;
    return connection.manager
            .save(user)
            .then(photo => {
                console.log("Photo has been saved. Photo id is", photo.firstName);
            });

}).catch(error => console.log(error));
*/
/*
let express = require('express');
let app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());
let Name:string;
let Surname:string;
app.get(`/getdeneme`,( req:any,res:any,next:any)=>{
    res.send(
        req.body
)
})
app.post(`/postdeneme`,(req:any,res:any,next:any)=>{
    Name=req.query.name;
    Surname=req.query.surname;
    res.send(req.body);
});
app.listen(3000,()=>console.log(`port is 3000`));
*/
// create typeorm connection
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Result } from "./dto/Result";
import { User } from "./entity/User";
import router from "./routeController/router";

createConnection().then(connection => {
    let express = require('express');
    let app = express();
    let bodyParser = require("body-parser");    
    app.use(bodyParser.json());
    app.use("/",router);
    
    /*asdfads
    const userRepositoryy = conncection.getRepository(User);
    
    app.get("/users", async (req: any, res: any) =>{
        const results =  await userRepository.find();
        return res.json(results);
    });

    app.post("/users",  (req: any, res: any) =>{
        const user =  userRepository.create(req.body);
        const results =  userRepository.save(user);
        return res.send(typeof(req.body));
    });

    app.delete("/users",  (req: any, res: any)=> {
        const results = userRepository.delete(req.query.id);
        let result = new Result();
        result.status = "OK";
        result.error = "deneme";
        let x = JSON.stringify(result);
        return res.send(x);
    });
    */
    // start express servers
    app.listen(3000,console.log("localhost is 3000"));
});