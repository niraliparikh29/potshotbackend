
// eslint-disable-next-line
import { inventoryTransactions, inventories, accounts } from '../../models';

import {
	successResponse, errorResponse, order, pagination,
} from '../../helpers';

export const list = async (req, res) => {
	try {
		const { inventoryId, accountId } = { ...req.body, ...req.params, ...req.query };
		const whereCondition = {};
		if (inventoryId) {
			whereCondition.inventoryId = inventoryId;
		}
		if (accountId) {
			whereCondition.userId = accountId;
		}
		const inventoryTransaction = await inventoryTransactions.findAndCountAll({
			where: whereCondition,
			include: [
				{
					model: inventories,
				},
				{
					model: accounts,
				},
			],
			order: [order(req, { field: 'createdAt', order: 'ASC' })],
			...pagination(req),
		});
		return successResponse(req, res, inventoryTransaction);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const insert = async (req, res) => {
	try {
		const {
			status, inventoryId, accountId, qty, amount,
		} = req.body;

		const payload = {
			status,
			inventoryId,
			accountId,
			qty,
			amount,
		};

		const inventoryTransaction = await inventoryTransactions.create(payload);
		return successResponse(req, res, inventoryTransaction);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const getOneById = async (req, res) => {
	try {
		const { id } = req.params;
		const inventoryTransaction = await inventoryTransactions.findOne({
			where: { id },
		});
		return successResponse(req, res, { inventoryTransaction });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const {
			status, id, inventoryId, accountId, qty, amount,
		} = { ...req.body, ...req.params, ...req.query };
		const inventoryTransaction = await inventoryTransactions.findOne({
			where: { id },
		});

		if (!inventoryTransaction) {
			return errorResponse(req, res, 'inventoryTransaction item does not exists');
		}
		const payload = {
			status, inventoryId, accountId, qty, amount,
		};
		await inventoryTransactions.update(payload, { where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const remove = async (req, res) => {
	try {
		const { id } = req.params;
		const inventoryTransaction = await inventoryTransactions.findOne({
			where: { id },
			include: [
				{
					model: inventories,
				},
				{
					model: accounts,
				},
			],
		});

		if (!inventoryTransaction) {
			return errorResponse(req, res, 'inventoryTransaction does not exists');
		}
		await inventoryTransactions.destroy({ where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
