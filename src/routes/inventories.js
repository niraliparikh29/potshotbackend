import express from 'express';
import validate from 'express-validation';

import * as inventoriesController from '../controllers/inventories/inventories.controller';
import * as inventoriesValidator from '../controllers/inventories/inventories.validator';

const router = express.Router();


/**
 * For listing all inventories
 */
router.get('/', inventoriesController.list);

/**
 * For Inserting inventories
 */
router.post(
	'/',
	validate(inventoriesValidator.insert),
	inventoriesController.insert,
);

/**
 * For updating inventories
 */
router.put(
	'/:id',
	validate(inventoriesValidator.update),
	inventoriesController.update,
);

/**
 * To get one inventories by id
 */
router.get(
	'/:id',
	validate(inventoriesValidator.update),
	inventoriesController.getOneById,
);

/**
 * To remove one inventories by id
 */
router.delete(
	'/:id',
	validate(inventoriesValidator.update),
	inventoriesController.remove,
);

module.exports = router;
