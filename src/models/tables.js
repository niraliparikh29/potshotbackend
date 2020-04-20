

module.exports = (sequelize, DataTypes) => {
	const tables = sequelize.define('tables', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		location: DataTypes.TEXT,
		name: DataTypes.STRING,
		time: DataTypes.DATE,
		slot: DataTypes.TIME,
		occupied: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		deletedAt: {
			type: DataTypes.DATE,
			paranoid: true,
		},
		status: { type: DataTypes.BOOLEAN, defaultValue: true },
	}, {});
	tables.associate = () => {
		// associations can be defined here
	};
	return tables;
};
