import express from 'express';
import validate from 'express-validation';

import * as companiesController from '../controllers/companies/companies.controller';
import * as companiesValidator from '../controllers/companies/companies.validator';

const router = express.Router();


/**
 * For listing all companies
 */
router.get('/', companiesController.list);

/**
 * For Inserting virtualAccountType
 */
router.post(
	'/',
	validate(companiesValidator.insert),
	companiesController.insert,
);

/**
 * For updating virtualAccountType
 */
router.put(
	'/:id',
	validate(companiesValidator.update),
	companiesController.update,
);

/**
 * To get one virtualAccountType by id
 */
router.get(
	'/:id',
	validate(companiesValidator.update),
	companiesController.getOneById,
);

/**
 * To remove one virtualAccountType by id
 */
router.delete(
	'/:id',
	validate(companiesValidator.update),
	companiesController.remove,
);

module.exports = router;
