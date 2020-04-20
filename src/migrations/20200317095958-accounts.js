

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('accounts', {
		id: {
			type: Sequelize.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4(),
		},
		name: {
			type: Sequelize.STRING,
		},
		mobile: {
			type: Sequelize.STRING,
		},
		address: {
			type: Sequelize.TEXT,
		},
		balance: {
			type: Sequelize.FLOAT,
		},
		credit: {
			type: Sequelize.FLOAT,
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
	down: queryInterface => queryInterface.dropTable('accounts'),
};
