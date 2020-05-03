import express from 'express';
import validate from 'express-validation';

import * as tablesController from '../controllers/tables/tables.controller';
import * as tablesValidator from '../controllers/tables/tables.validator';

const router = express.Router();


/**
 * For listing all tables
 */
router.get('/', tablesController.list);

/**
 * For Inserting virtualAccountType
 */
router.post(
	'/',
	validate(tablesValidator.insert),
	tablesController.insert,
);

/**
 * For updating virtualAccountType
 */
router.put(
	'/:id',
	validate(tablesValidator.update),
	tablesController.update,
);

/**
 * To get one virtualAccountType by id
 */
router.get(
	'/:id',
	validate(tablesValidator.update),
	tablesController.getOneById,
);

/**
 * To remove one virtualAccountType by id
 */
router.delete(
	'/:id',
	validate(tablesValidator.update),
	tablesController.remove,
);

module.exports = router;
