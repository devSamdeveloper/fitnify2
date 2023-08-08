import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.mjs";
import { getRutines, getRutine, createRutine, updateRutine, deleteRutine } from "../controllers/rutines.controllers.mjs";

const router = Router();


router.get('/rutines', authRequired, getRutines);
router.get('/rutines/:id', authRequired, getRutine);
router.post('/rutines', authRequired, createRutine);
router.put('/rutines/:id', authRequired, updateRutine)
router.delete('/rutines/:id', authRequired, deleteRutine)

export default router;