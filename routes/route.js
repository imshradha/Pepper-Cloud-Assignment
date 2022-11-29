import express from 'express';
import { createForm, editForm, viewForm, viewAllForms } from '../controllers/form-controller.js';

const router = express.Router();

router.post('/form/create', createForm);
router.put('/form/edit/:id', editForm);
router.get('/form/:id', viewForm);
router.get('/forms', viewAllForms);

viewAllForms

export default router;

