

module.exports = (sequelize, DataTypes) => {
	const payments = sequelize.define('payments', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
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
		paid: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		type: {
			type: DataTypes.STRING,
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
	payments.associate = (models) => {
		payments.belongsTo(models.accounts, { foreignKey: 'accountId', targetKey: 'id' });
	};
	return payments;
};
