import express from 'express';
import { TagController } from '../controllers/tag.controller.js';
import { tagValidation } from '../validations/tag.validation.js';
import { objectIdValidation } from '../validations/objectIdValidation.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { CheckPermission } from '../utils/CheckPermission.js';

const tagRouter = express.Router();

tagRouter.get('/', TagController.getAllTags);
tagRouter.get('/:id', objectIdValidation, TagController.getOneTag);

// create a new tag
tagRouter.post(
  '/',
  authMiddleware,
  CheckPermission('Create_Tag'),
  tagValidation,
  TagController.createTag
);

// update a tag by id
tagRouter.patch(
  '/:id',
  authMiddleware,
  CheckPermission('Update_Tag'),
  objectIdValidation,
  tagValidation,
  TagController.updateTagById
);

// delete a tag by id
tagRouter.delete(
  '/:id',
  authMiddleware,
  CheckPermission('Delete_Tag'),
  objectIdValidation,
  TagController.deleteTagById
);

export default tagRouter;
