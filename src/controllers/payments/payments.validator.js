import Joi from 'joi';

export const insert = {
	body: {
		accountId: Joi.string().required(),
	},
};

export const update = {
	params: {
		id: Joi.string().required(),
	},
};
