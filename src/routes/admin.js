import express from 'express';
import * as userController from '../controllers/user/user.controller';
import acl from '../config/acl';
import apiAuth from '../middleware/apiAuth';
const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get(
    '/allUsers',
    apiAuth,
    acl.authorize,
    userController.allUsers,
);

module.exports = router;
