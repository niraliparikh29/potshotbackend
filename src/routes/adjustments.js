import express from 'express';
import validate from 'express-validation';

import * as adjustmentsController from '../controllers/adjustments/adjustments.controller';
import * as adjustmentsValidator from '../controllers/adjustments/adjustments.validator';

const router = express.Router();


/**
 * For listing all adjustments
 */
router.get('/', adjustmentsController.list);

/**
 * For Inserting adjustments
 */
router.post(
	'/',
	validate(adjustmentsValidator.insert),
	adjustmentsController.insert,
);

/**
 * For updating adjustments
 */
router.put(
	'/:id',
	validate(adjustmentsValidator.update),
	adjustmentsController.update,
);

/**
 * To get one adjustments by id
 */
router.get(
	'/:id',
	validate(adjustmentsValidator.update),
	adjustmentsController.getOneById,
);

/**
 * To remove one adjustments by id
 */
router.delete(
	'/:id',
	validate(adjustmentsValidator.update),
	adjustmentsController.remove,
);

module.exports = router;
