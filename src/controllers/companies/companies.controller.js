
// eslint-disable-next-line
import { companies } from '../../models';

import {
	successResponse, errorResponse, order, pagination,
} from '../../helpers';

export const list = async (req, res) => {
	try {
		const companieData = await companies.findAndCountAll({
			order: [order(req, { field: 'name', order: 'ASC' })],
			...pagination(req),
		});
		return successResponse(req, res, companieData);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const insert = async (req, res) => {
	try {
		const {
			name, status, balance, inventoryPurchase, credit,
		} = req.body;

		const payload = {
			name,
			status,
			balance,
			inventoryPurchase,
			credit,
		};

		const company = await companies.create(payload);
		return successResponse(req, res, company);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const getOneById = async (req, res) => {
	try {
		const { id } = req.params;
		const company = await companies.findOne({
			where: { id },
		});
		return successResponse(req, res, { company });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const {
			name, status, id, balance, inventoryPurchase, credit,
		} = { ...req.body, ...req.params, ...req.query };
		const company = await companies.findOne({
			where: { id },
		});

		if (!company) {
			return errorResponse(req, res, 'company does not exists');
		}
		const payload = {
			name, status, balance, inventoryPurchase, credit,
		};
		await companies.update(payload, { where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const remove = async (req, res) => {
	try {
		const { id } = req.params;
		const company = await companies.findOne({
			where: { id },
		});

		if (!company) {
			return errorResponse(req, res, 'company does not exists');
		}
		await companies.destroy({ where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
