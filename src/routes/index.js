import express from 'express';


import adminRoutes from './admin';
import publicRoutes from './public';
import userRoutes from './users';
import companies from './companies';
import tables from './tables';
import accounts from './accounts';
import inventories from './inventories';
import adjustments from './adjustments';
import tableTransactions from './tableTransactions';
import payments from './payments';
import inventoryTransactions from './inventoryTransactions';
import apiMiddleware from '../middleware/apiAuth';
import adminMiddleware from '../middleware/adminAuth';

const app = express();

/* routes */

app.use('/user', apiMiddleware, userRoutes);
app.use('/companies', apiMiddleware, companies);
app.use('/tables', apiMiddleware, tables);
app.use('/accounts', apiMiddleware, accounts);
app.use('/inventoryTransactions', apiMiddleware, inventoryTransactions);
app.use('/payments', apiMiddleware, payments);
app.use('/tableTransactions', apiMiddleware, tableTransactions);
app.use('/adjustments', apiMiddleware, adjustments);
app.use('/inventories', apiMiddleware, inventories);
app.use('/admin', apiMiddleware, adminMiddleware, adminRoutes);


/* public routes */
app.use('/pub', publicRoutes);


module.exports = app;
