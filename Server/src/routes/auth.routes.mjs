import { Router } from "express";
import { login, logout, register, dashboard } from "../controllers/auth.controllers.mjs";
import { authRequired } from "../middlewares/validateToken.mjs";


const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/dashboard', authRequired, dashboard)

export default router;
