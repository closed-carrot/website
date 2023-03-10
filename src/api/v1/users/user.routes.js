import { validator } from '../../api.middlewares.js';
import catchAsyncHandler from 'express-async-handler';

import express from 'express';
const user = express.Router();

import * as userControllers from './user.controllers.js';
import * as userValidators from './user.validators.js';

/**
 * GET /api/v1/users
 * @tags users
 * @summary get list of all users
 * @security BearerAuth
 */
user.get('/', catchAsyncHandler(userControllers.getUsers));

/**
 * GET /api/v1/users/{id}
 * @tags users
 * @summary get details of a specific user
 * @param {string} id.path.required - the user id
 * @security BearerAuth
 */
user.get('/:id', validator(userValidators.getUser), catchAsyncHandler(userControllers.getUser));

/**
 * PATCH /api/v1/users/{id}
 * @tags users
 * @summary update details of a specific user
 * @param {string} id.path.required - the user id
 * @security BearerAuth
 */
user.patch(
  '/:id',
  validator(userValidators.patchUser),
  catchAsyncHandler(userControllers.patchUser),
);

/**
 * DELETE /api/v1/users/{id}
 * @tags users
 * @summary delete a specific user
 * @param {string} id.path.required - the user id
 * @security BearerAuth
 */
user.delete(
  '/:id',
  validator(userValidators.deleteUser),
  catchAsyncHandler(userControllers.deleteUser),
);

export default user;
