import { Router } from "express";
import { login, logout, register, dashboard, verifyToken } from "../controllers/auth.controllers.mjs";
import { authRequired } from "../middlewares/validateToken.mjs";
import { validateSchema } from "../middlewares/validatorSchema.middleware.mjs";
import { registerSchema , loginSchema } from "../validateSchemas/auth.schema.mjs"

const router = Router();

router.post('/register', validateSchema(registerSchema),register);
router.post('/login', validateSchema(loginSchema),login);
router.post('/logout', logout);
router.get('/verify', verifyToken)
router.get('/dashboard', authRequired, dashboard)

export default router;
