

module.exports = (sequelize, DataTypes) => {
	const accounts = sequelize.define('accounts', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
		},
		mobile: {
			type: DataTypes.STRING,
		},
		address: {
			type: DataTypes.TEXT,
		},
		balance: {
			type: DataTypes.FLOAT,
			defaultValue: 0,
		},
		credit: {
			type: DataTypes.FLOAT,
			defaultValue: 0,
		},
		deletedAt: {
			type: DataTypes.DATE,
			paranoid: true,
		},
		status: { type: DataTypes.BOOLEAN, defaultValue: true },
	}, {});
	accounts.associate = () => {
		// associations can be defined here
	};
	return accounts;
};
