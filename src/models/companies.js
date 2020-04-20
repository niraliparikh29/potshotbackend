

module.exports = (sequelize, DataTypes) => {
	const companies = sequelize.define('companies', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: DataTypes.STRING,
		balance: DataTypes.FLOAT,
		inventoryPurchase: DataTypes.FLOAT,
		credit: DataTypes.FLOAT,
		deletedAt: {
			type: DataTypes.DATE,
			paranoid: true,
		},
		status: { type: DataTypes.BOOLEAN, defaultValue: true },
	}, {});
	companies.associate = () => {
		// associations can be defined here
	};
	return companies;
};
