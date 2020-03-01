import express from 'express';
import validate from 'express-validation';
import multer from 'multer';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';

const router = express.Router();

const upload = multer();
const uploads = upload.any();

//= ===============================
// Public routes
//= ===============================

router.post(
  '/login',
  validate(userValidator.login),
  userController.login,
);
router.post(
  '/register',
  uploads,
  validate(userValidator.register),
  userController.register,
);

module.exports = router;
