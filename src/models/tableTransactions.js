

module.exports = (sequelize, DataTypes) => {
	const tableTransactions = sequelize.define('tableTransactions', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		tableId: {
			type: DataTypes.UUID,
			allowNull: false,
			references: {
				model: 'tables',
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
		startTime: {
			type: DataTypes.DATE,
			defaultValue: new Date(),
		},
		endTime: {
			type: DataTypes.DATE,
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
	tableTransactions.associate = (models) => {
		tableTransactions.belongsTo(models.accounts, { foreignKey: 'accountId', targetKey: 'id' });
		tableTransactions.belongsTo(models.tables, { foreignKey: 'tableId', targetKey: 'id' });
	};
	return tableTransactions;
};
