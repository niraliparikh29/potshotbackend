import express from 'express';
import validate from 'express-validation';

import * as paymentsController from '../controllers/payments/payments.controller';
import * as paymentsValidator from '../controllers/payments/payments.validator';

const router = express.Router();


/**
 * For listing all payments
 */
router.get('/', paymentsController.list);

/**
 * For Inserting payments
 */
router.post(
	'/',
	validate(paymentsValidator.insert),
	paymentsController.insert,
);

/**
 * For updating payments
 */
router.put(
	'/:id',
	validate(paymentsValidator.update),
	paymentsController.update,
);

/**
 * To get one payments by id
 */
router.get(
	'/:id',
	validate(paymentsValidator.update),
	paymentsController.getOneById,
);

/**
 * To remove one payments by id
 */
router.delete(
	'/:id',
	validate(paymentsValidator.update),
	paymentsController.remove,
);

module.exports = router;
