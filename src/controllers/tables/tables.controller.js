
// eslint-disable-next-line
import { tables } from '../../models';

import {
	successResponse, errorResponse, order, pagination,
} from '../../helpers';

export const list = async (req, res) => {
	try {
		const table = await tables.findAndCountAll({
			order: [order(req, { field: 'name', order: 'ASC' })],
			...pagination(req),
		});
		return successResponse(req, res, table);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const insert = async (req, res) => {
	try {
		const {
			name, status, location, time, slot, occupied,
		} = req.body;

		const payload = {
			name,
			status,
			location,
			time,
			slot,
			occupied,
		};

		const table = await tables.create(payload);
		return successResponse(req, res, table);
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const getOneById = async (req, res) => {
	try {
		const { id } = req.params;
		const table = await tables.findOne({
			where: { id },
		});
		return successResponse(req, res, { table });
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const update = async (req, res) => {
	try {
		const {
			name, status, id, location, time, slot, occupied,
		} = { ...req.body, ...req.params, ...req.query };
		const table = await tables.findOne({
			where: { id },
		});

		if (!table) {
			return errorResponse(req, res, 'table does not exists');
		}
		const payload = {
			name, status, location, time, slot, occupied,
		};
		await tables.update(payload, { where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};

export const remove = async (req, res) => {
	try {
		const { id } = req.params;
		const table = await tables.findOne({
			where: { id },
		});

		if (!table) {
			return errorResponse(req, res, 'table does not exists');
		}
		await tables.destroy({ where: { id } });
		return successResponse(req, res, {});
	} catch (error) {
		return errorResponse(req, res, error.message);
	}
};
