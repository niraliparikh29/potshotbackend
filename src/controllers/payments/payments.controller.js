
// eslint-disable-next-line
import { payments, accounts } from '../../models';

import {
	successResponse, errorResponse, order, pagination,
} from '../../helpers';

export const list = async (req, res) => {
	try {
		const { accountId, paid } = { ...req.body, ...req.params, ...req.query };
		const whereCondition = {};
		if (accountId) {
			whereCondition.userId = accountId;
		}
		if (paid === 'true') {
			whereCondition.paid = true;
		}
		if (paid === 'false') {
			whereCondition.paid = false;
		}
		const payment = await payments.findAndCountAll({
			where: whereCondition,
			include: [
				{
					model: accounts,
				},
			],
			order: [order(req, { field: 'createdAt', order: 'ASC' })],
			...pagination(req),
		});
		return successResponse(req, res, payment);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const insert = async (req, res) => {
	try {
		const {
			status, accountId, paid, type, amount,
		} = req.body;

		const payload = {
			status,
			accountId,
			paid,
			type,
			amount,
		};

		const payment = await payments.create(payload);
		return successResponse(req, res, payment);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const getOneById = async (req, res) => {
	try {
		const { id } = req.params;
		const payment = await payments.findOne({
			where: { id },
		});
		return successResponse(req, res, { payment });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const {
			status, id, accountId, paid, type, amount,
		} = { ...req.body, ...req.params, ...req.query };
		const payment = await payments.findOne({
			where: { id },
		});

		if (!payment) {
			return errorResponse(req, res, 'payment item does not exists');
		}
		const payload = {
			status, accountId, paid, type, amount,
		};
		await payments.update(payload, { where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const remove = async (req, res) => {
	try {
		const { id } = req.params;
		const payment = await payments.findOne({
			where: { id },
			include: [
				{
					model: accounts,
				},
			],
		});

		if (!payment) {
			return errorResponse(req, res, 'payment does not exists');
		}
		await payments.destroy({ where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
