import express from 'express';
import validate from 'express-validation';

import * as inventoryTransactionsController from '../controllers/inventoryTransactions/inventoryTransactions.controller';
import * as inventoryTransactionsValidator from '../controllers/inventoryTransactions/inventoryTransactions.validator';

const router = express.Router();


/**
 * For listing all inventoryTransactions
 */
router.get('/', inventoryTransactionsController.list);

/**
 * For Inserting inventoryTransactions
 */
router.post(
	'/',
	validate(inventoryTransactionsValidator.insert),
	inventoryTransactionsController.insert,
);

/**
 * For updating inventoryTransactions
 */
router.put(
	'/:id',
	validate(inventoryTransactionsValidator.update),
	inventoryTransactionsController.update,
);

/**
 * To get one inventoryTransactions by id
 */
router.get(
	'/:id',
	validate(inventoryTransactionsValidator.update),
	inventoryTransactionsController.getOneById,
);

/**
 * To remove one inventoryTransactions by id
 */
router.delete(
	'/:id',
	validate(inventoryTransactionsValidator.update),
	inventoryTransactionsController.remove,
);

module.exports = router;
