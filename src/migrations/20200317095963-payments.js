

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('payments', {
		id: {
			type: Sequelize.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4(),
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
		paid: {
			type: Sequelize.BOOLEAN,
			defaultValue: false,
		},
		type: {
			type: Sequelize.STRING,
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
	down: queryInterface => queryInterface.dropTable('payments'),
};
