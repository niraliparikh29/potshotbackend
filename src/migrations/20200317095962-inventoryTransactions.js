

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('inventoryTransactions', {
		id: {
			type: Sequelize.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4(),
		},
		inventoryId: {
			type: Sequelize.UUID,
			allowNull: false,
			references: {
				model: 'inventories',
				key: 'id',
			},
			onDelete: 'restrict',
			onUpdate: 'CASCADE',
		},
		accountId: {
			type: Sequelize.UUID,
			allowNull: false,
			references: {
				model: 'accounts',
				key: 'id',
			},
			onDelete: 'restrict',
			onUpdate: 'CASCADE',
		},
		qty: {
			type: Sequelize.FLOAT,
			defaultValue: 0,
		},
		amount: {
			type: Sequelize.FLOAT,
			defaultValue: 0,
		},
		deletedAt: {
			type: Sequelize.DATE,
			paranoid: true,
		},
		status: {
			type: Sequelize.BOOLEAN,
		},
		createdAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
		updatedAt: {
			allowNull: false,
			type: Sequelize.DATE,
		},
	}),
	down: queryInterface => queryInterface.dropTable('inventoryTransactions'),
};
