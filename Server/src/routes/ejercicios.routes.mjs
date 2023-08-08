import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.mjs";
import { getEjercicios, getEjercicio, createEjercicio, updateEjercicio, deleteEjercicio } from "../controllers/ejercicios.controllers.mjs";

const router = Router();


router.get('/ejercicios', authRequired, getEjercicios);
router.get('/ejercicios/:id', authRequired, getEjercicio);
router.post('/ejercicios', authRequired, createEjercicio);
router.put('/ejercicios/:id', authRequired, updateEjercicio)
router.delete('/ejercicios/:id', authRequired, deleteEjercicio)

export default router;