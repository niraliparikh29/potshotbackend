

module.exports = {
	up: queryInterface => queryInterface.bulkInsert(
		'users',
		[
			{
				id: '19457db7-1576-48ad-b219-d10e5b2e561d',
				firstName: 'Himanshu',
				lastName: 'Patel',
				mobile: '6625342241',
				email: 'himanshu@gmail.com',
				password: 'a6c3e0efd0f84503604553bf11b7d40e',
				status: true,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
		{},
	),
	down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
