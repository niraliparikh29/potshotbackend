
// eslint-disable-next-line
import { tableTransactions, tables, accounts } from '../../models';

import {
	successResponse, errorResponse, order, pagination,
} from '../../helpers';

export const list = async (req, res) => {
	try {
		const { tableId, accountId } = { ...req.body, ...req.params, ...req.query };
		const whereCondition = {};
		if (tableId) {
			whereCondition.inventoryId = tableId;
		}
		if (accountId) {
			whereCondition.userId = accountId;
		}
		const tableTransaction = await tableTransactions.findAndCountAll({
			where: whereCondition,
			include: [
				{
					model: tables,
				},
				{
					model: accounts,
				},
			],
			order: [order(req, { field: 'createdAt', order: 'ASC' })],
			...pagination(req),
		});
		return successResponse(req, res, tableTransaction);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const insert = async (req, res) => {
	try {
		const {
			status, tableId, accountId, startTime, endTime, amount,
		} = req.body;

		const payload = {
			status,
			tableId,
			accountId,
			startTime,
			endTime,
			amount,
		};

		const tableTransaction = await tableTransactions.create(payload);
		return successResponse(req, res, tableTransaction);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const getOneById = async (req, res) => {
	try {
		const { id } = req.params;
		const tableTransaction = await tableTransactions.findOne({
			where: { id },
		});
		return successResponse(req, res, { tableTransaction });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const {
			status, id, tableId, accountId, startTime, endTime, amount,
		} = { ...req.body, ...req.params, ...req.query };
		const tableTransaction = await tableTransactions.findOne({
			where: { id },
		});

		if (!tableTransaction) {
			return errorResponse(req, res, 'tableTransaction item does not exists');
		}
		const payload = {
			status, tableId, accountId, startTime, endTime, amount,
		};
		await tableTransactions.update(payload, { where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const remove = async (req, res) => {
	try {
		const { id } = req.params;
		const tableTransaction = await tableTransactions.findOne({
			where: { id },
			include: [
				{
					model: tables,
				},
				{
					model: accounts,
				},
			],
		});

		if (!tableTransaction) {
			return errorResponse(req, res, 'tableTransaction does not exists');
		}
		await tableTransactions.destroy({ where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
