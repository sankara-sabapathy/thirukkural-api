import express from 'express';
import controller from '../controllers/requests';
const router = express.Router();

router.get('/', controller.getAllKural);
router.get('/:id', controller.getKural);
router.get('/raw/:id', controller.getRawKural);

export = router;