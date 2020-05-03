import express from 'express';
import validate from 'express-validation';

import * as tableTransactionsController from '../controllers/tableTransactions/tableTransactions.controller';
import * as tableTransactionsValidator from '../controllers/tableTransactions/tableTransactions.validator';

const router = express.Router();


/**
 * For listing all tableTransactions
 */
router.get('/', tableTransactionsController.list);

/**
 * For Inserting tableTransactions
 */
router.post(
	'/',
	validate(tableTransactionsValidator.insert),
	tableTransactionsController.insert,
);

/**
 * For updating tableTransactions
 */
router.put(
	'/:id',
	validate(tableTransactionsValidator.update),
	tableTransactionsController.update,
);

/**
 * To get one tableTransactions by id
 */
router.get(
	'/:id',
	validate(tableTransactionsValidator.update),
	tableTransactionsController.getOneById,
);

/**
 * To remove one tableTransactions by id
 */
router.delete(
	'/:id',
	validate(tableTransactionsValidator.update),
	tableTransactionsController.remove,
);

module.exports = router;
