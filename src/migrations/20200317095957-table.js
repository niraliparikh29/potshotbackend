

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('tables', {
		id: {
			type: Sequelize.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4(),
		},
		name: {
			type: Sequelize.STRING,
		},
		location: {
			type: Sequelize.TEXT,
		},
		time: {
			type: Sequelize.DATE,
		},
		slot: {
			type: Sequelize.TIME,
		},
		occupied: {
			type: Sequelize.BOOLEAN,
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
	down: queryInterface => queryInterface.dropTable('tables'),
};
