
// eslint-disable-next-line
import { accounts } from '../../models';

import {
	successResponse, errorResponse, order, pagination,
} from '../../helpers';

export const list = async (req, res) => {
	try {
		const account = await accounts.findAndCountAll({
			order: [order(req, { field: 'name', order: 'ASC' })],
			...pagination(req),
		});
		return successResponse(req, res, account);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const insert = async (req, res) => {
	try {
		const {
			name, status, mobile, address, balance, credit,
		} = req.body;

		const payload = {
			name,
			status,
			mobile,
			address,
			balance,
			credit,
		};

		const account = await accounts.create(payload);
		return successResponse(req, res, account);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const getOneById = async (req, res) => {
	try {
		const { id } = req.params;
		const account = await accounts.findOne({
			where: { id },
		});
		return successResponse(req, res, { account });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const {
			name, status, id, mobile, address, balance, credit,
		} = { ...req.body, ...req.params, ...req.query };
		const account = await accounts.findOne({
			where: { id },
		});

		if (!account) {
			return errorResponse(req, res, 'account does not exists');
		}
		const payload = {
			name, status, mobile, address, balance, credit,
		};
		await accounts.update(payload, { where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const remove = async (req, res) => {
	try {
		const { id } = req.params;
		const account = await accounts.findOne({
			where: { id },
		});

		if (!account) {
			return errorResponse(req, res, 'account does not exists');
		}
		await accounts.destroy({ where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
