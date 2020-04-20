

module.exports = (sequelize, DataTypes) => {
	const inventories = sequelize.define('inventories', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		item: {
			type: DataTypes.TEXT,
		},
		qty: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		salePrice: {
			type: DataTypes.FLOAT,
		},
		purchasePrice: {
			type: DataTypes.FLOAT,
		},
		deletedAt: {
			type: DataTypes.DATE,
			paranoid: true,
		},
		status: { type: DataTypes.BOOLEAN, defaultValue: true },
	}, {});
	inventories.associate = () => {
		// associations can be defined here
	};
	return inventories;
};
