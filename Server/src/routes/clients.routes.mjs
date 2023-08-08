import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.mjs";
import { getClients, getClient, createClient, updateClient, deleteClient } from "../controllers/clients.controllers.mjs";

const router = Router();


router.get('/clients', authRequired, getClients);
router.get('/clients/:id', authRequired, getClient);
router.post('/clients', authRequired, createClient);
router.put('/clients/:id', authRequired, updateClient)
router.delete('/clients/:id', authRequired, deleteClient)

export default router;