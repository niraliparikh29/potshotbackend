

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('adjustments', {
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
		userId: {
			type: Sequelize.UUID,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id',
			},
			onDelete: 'restrict',
			onUpdate: 'CASCADE',
		},
		qty: {
			type: Sequelize.INTEGER,
			defaultValue: 0,
		},
		isCredit: {
			type: Sequelize.BOOLEAN,
			defaultValue: true,
		},
		reason: {
			type: Sequelize.TEXT,
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
	down: queryInterface => queryInterface.dropTable('inventories'),
};
