import express from 'express';
import { objectIdValidation } from '../validations/objectId.validation.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { CheckPermission } from '../utils/CheckPermission.js';
import { PaymentStatusController } from '../controllers/payment_status.controller.js';
import { paymentStatusValidation } from '../validations/payment_status.validation.js';

const paymentStatusRouter = express.Router();

paymentStatusRouter.get(
  '/',
  authMiddleware,
  CheckPermission(['Read_PaymentStatus', 'All_PaymentStatus_Permission']),
  PaymentStatusController.getAllPaymentStatuses
);
paymentStatusRouter.get(
  '/:id',
  authMiddleware,
  CheckPermission(['Read_PaymentStatus', 'All_PaymentStatus_Permission']),
  objectIdValidation,
  PaymentStatusController.getPaymentStatus
);

// create new paymentStatus
paymentStatusRouter.post(
  '/',
  authMiddleware,
  CheckPermission(['Create_PaymentStatus', 'All_PaymentStatus_Permission']),
  paymentStatusValidation,
  PaymentStatusController.createNewPaymentStatus
);

// update paymentStatus by id
paymentStatusRouter.patch(
  '/:id',
  authMiddleware,
  CheckPermission(['Update_PaymentStatus', 'All_PaymentStatus_Permission']),
  objectIdValidation,
  paymentStatusValidation,
  PaymentStatusController.updatePaymentStatus
);

// delete paymentStatus by id
paymentStatusRouter.delete(
  '/:id',
  authMiddleware,
  CheckPermission(['Delete_PaymentStatus', 'All_PaymentStatus_Permission']),
  objectIdValidation,
  PaymentStatusController.deletePaymentStatus
);

export default paymentStatusRouter;