

module.exports = (sequelize, DataTypes) => {
	const inventoryTransactions = sequelize.define('inventoryTransactions', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		inventoryId: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: 'inventories',
				key: 'id',
			},
			onDelete: 'restrict',
			onUpdate: 'CASCADE',
		},
		accountId: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: 'accounts',
				key: 'id',
			},
			onDelete: 'restrict',
			onUpdate: 'CASCADE',
		},
		qty: {
			type: DataTypes.FLOAT,
			defaultValue: 0,
		},
		amount: {
			type: DataTypes.FLOAT,
			defaultValue: 0,
		},
		deletedAt: {
			type: DataTypes.DATE,
			paranoid: true,
		},
		status: { type: DataTypes.BOOLEAN, defaultValue: true },
	}, {});
	inventoryTransactions.associate = (models) => {
		inventoryTransactions.belongsTo(models.accounts, { foreignKey: 'accountId', targetKey: 'id' });
		inventoryTransactions.belongsTo(models.inventories, { foreignKey: 'inventoryId', targetKey: 'id' });
	};
	return inventoryTransactions;
};
