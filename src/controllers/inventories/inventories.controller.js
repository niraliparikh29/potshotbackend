
// eslint-disable-next-line
import { inventories } from '../../models';

import {
	successResponse, errorResponse, order, pagination,
} from '../../helpers';

export const list = async (req, res) => {
	try {
		const inventory = await inventories.findAndCountAll({
			order: [order(req, { field: 'name', order: 'ASC' })],
			...pagination(req),
		});
		return successResponse(req, res, inventory);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const insert = async (req, res) => {
	try {
		const {
			status, item, qty, salePrice, purchasePrice,
		} = req.body;

		const payload = {
			status,
			item,
			qty,
			salePrice,
			purchasePrice,
		};

		const inventory = await inventories.create(payload);
		return successResponse(req, res, inventory);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const getOneById = async (req, res) => {
	try {
		const { id } = req.params;
		const inventory = await inventories.findOne({
			where: { id },
		});
		return successResponse(req, res, { inventory });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const {
			status, id, item, qty, salePrice, purchasePrice,
		} = { ...req.body, ...req.params, ...req.query };
		const inventory = await inventories.findOne({
			where: { id },
		});

		if (!inventory) {
			return errorResponse(req, res, 'inventory item does not exists');
		}
		const payload = {
			status, item, qty, salePrice, purchasePrice,
		};
		await inventories.update(payload, { where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const remove = async (req, res) => {
	try {
		const { id } = req.params;
		const inventory = await inventories.findOne({
			where: { id },
		});

		if (!inventory) {
			return errorResponse(req, res, 'inventory item does not exists');
		}
		await inventories.destroy({ where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
