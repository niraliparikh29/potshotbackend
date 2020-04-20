
// eslint-disable-next-line
import { adjustments, inventories, users } from '../../models';

import {
	successResponse, errorResponse, order, pagination,
} from '../../helpers';

export const list = async (req, res) => {
	try {
		const { inventoryId, userId } = { ...req.body, ...req.params, ...req.query };
		const whereCondition = {};
		if (inventoryId) {
			whereCondition.inventoryId = inventoryId;
		}
		if (userId) {
			whereCondition.userId = userId;
		}
		const adjustment = await adjustments.findAndCountAll({
			where: whereCondition,
			include: [
				{
					model: inventories,
				},
				{
					model: users,
				},
			],
			order: [order(req, { field: 'createdAt', order: 'ASC' })],
			...pagination(req),
		});
		return successResponse(req, res, adjustment);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const insert = async (req, res) => {
	try {
		const {
			status, inventoryId, userId, qty, isCredit, reason,
		} = req.body;

		const payload = {
			status,
			inventoryId,
			userId,
			qty,
			isCredit,
			reason,
		};

		const adjustment = await adjustments.create(payload);
		return successResponse(req, res, adjustment);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const getOneById = async (req, res) => {
	try {
		const { id } = req.params;
		const adjustment = await adjustments.findOne({
			where: { id },
		});
		return successResponse(req, res, { adjustment });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const {
			status, id, inventoryId, userId, qty, isCredit, reason,
		} = { ...req.body, ...req.params, ...req.query };
		const adjustment = await adjustments.findOne({
			where: { id },
		});

		if (!adjustment) {
			return errorResponse(req, res, 'adjustment item does not exists');
		}
		const payload = {
			status, inventoryId, userId, qty, isCredit, reason,
		};
		await adjustments.update(payload, { where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const remove = async (req, res) => {
	try {
		const { id } = req.params;
		const adjustment = await adjustments.findOne({
			where: { id },
			include: [
				{
					model: inventories,
				},
				{
					model: users,
				},
			],
		});

		if (!adjustment) {
			return errorResponse(req, res, 'adjustment item does not exists');
		}
		await adjustments.destroy({ where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
