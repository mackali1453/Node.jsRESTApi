import {Request,Response} from "express";
import {getRepository, ObjectID} from "typeorm";
import {User} from "../entity/User";
import {DeviceData} from "../entity/DeviceData";
import methods from "../interfaces/methods";
import { resolveTxt } from "dns";
class postController implements methods{
    // async post(req:Request,res:Response){
    //     const user = getRepository(User).create(req.body);
    //     const results = await getRepository(User).save(user);
    //     return res.json(results);
    // }
    // async get(req:Request,res:Response) {
    //     const results = await getRepository(User).find(req.body);
    //     return res.json(results);
    // }
    // async delete(req:Request,res:Response){
    //     const results = await getRepository(User).delete(req.body);
    //     return res.json(results);
    // }
    // async saveDeviceData(req:Request,res:Response){
    //     const deviceData = getRepository(DeviceData).create(req.body);
    //     const results = await getRepository(DeviceData).save(deviceData);
        
    //     return res.json(results);
    // }
    // get_random_number(number_inclusive:number,number_exlusive:number) :number
    //         {
    //             var random_number = Math.floor(Math.random() * (number_exlusive - number_inclusive + 1)) + number_inclusive;
    //             return random_number;
    //         }
    receiveLastSendData(req:Request,res:Response) {
        // const results = await getRepository(DeviceData).find({
        //     where:{
        //         deviceId: req.query.deviceId
        //     },
        //     order: {
        //         id: 'DESC'
        //      },
        //      take: 1,
        // });
        var min = Number(req.query.min);
        var max = Number(req.query.max);
        function get_random_number(number_inclusive:number,number_exlusive:number) :number
            {
                var random_number = Math.floor(Math.random() * (number_exlusive - number_inclusive )) + number_inclusive;
                return random_number;
            } 
            res.json(get_random_number(10,50));
    }
}
export default postController;