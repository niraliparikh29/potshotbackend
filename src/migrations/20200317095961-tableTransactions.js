

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('tableTransactions', {
		id: {
			type: Sequelize.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4(),
		},
		tableId: {
			type: Sequelize.UUID,
			allowNull: false,
			references: {
				model: 'tables',
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
		startTime: {
			type: Sequelize.DATE,
			defaultValue: new Date(),
		},
		endTime: {
			type: Sequelize.DATE,
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
	down: queryInterface => queryInterface.dropTable('tableTransactions'),
};
