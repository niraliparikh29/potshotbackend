import express from 'express';
import validate from 'express-validation';

import * as accountsController from '../controllers/accounts/accounts.controller';
import * as accountsValidator from '../controllers/accounts/accounts.validator';

const router = express.Router();


/**
 * For listing all accounts
 */
router.get('/', accountsController.list);

/**
 * For Inserting virtualAccountType
 */
router.post(
	'/',
	validate(accountsValidator.insert),
	accountsController.insert,
);

/**
 * For updating virtualAccountType
 */
router.put(
	'/:id',
	validate(accountsValidator.update),
	accountsController.update,
);

/**
 * To get one virtualAccountType by id
 */
router.get(
	'/:id',
	validate(accountsValidator.update),
	accountsController.getOneById,
);

/**
 * To remove one virtualAccountType by id
 */
router.delete(
	'/:id',
	validate(accountsValidator.update),
	accountsController.remove,
);

module.exports = router;
