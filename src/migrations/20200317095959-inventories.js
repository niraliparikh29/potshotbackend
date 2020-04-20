

module.exports = {
	up: (queryInterface, Sequelize) => queryInterface.createTable('inventories', {
		id: {
			type: Sequelize.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4(),
		},
		item: {
			type: Sequelize.TEXT,
		},
		qty: {
			type: Sequelize.INTEGER,
		},
		salePrice: {
			type: Sequelize.FLOAT,
		},
		purchasePrice: {
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
	down: queryInterface => queryInterface.dropTable('inventories'),
};
