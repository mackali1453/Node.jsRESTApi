import postController from "../postController/post";
import {Router} from "express";
const controller = new postController();
const router = Router();

// router.post("/users",controller.post);
// router.delete("/users",controller.delete);
// router.get("/users",controller.get);
// router.post("/SaveDeviceData",controller.saveDeviceData);
router.get("/ReceiveLastSendData",controller.receiveLastSendData);
export default router;