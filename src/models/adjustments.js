

module.exports = (sequelize, DataTypes) => {
	const adjustments = sequelize.define('adjustments', {
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
		userId: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id',
			},
			onDelete: 'restrict',
			onUpdate: 'CASCADE',
		},
		qty: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
		},
		isCredit: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
		reason: {
			type: DataTypes.TEXT,
		},
		deletedAt: {
			type: DataTypes.DATE,
			paranoid: true,
		},
		status: { type: DataTypes.BOOLEAN, defaultValue: true },
	}, {});
	adjustments.associate = (models) => {
		adjustments.belongsTo(models.inventories, { foreignKey: 'inventoryId', targetKey: 'id' });
		adjustments.belongsTo(models.users, { foreignKey: 'userId', targetKey: 'id' });
	};
	return adjustments;
};
