import express from 'express';
import authRouter from './auth.js';
import roleRouter from './role.js';
import permissionRouter from './permission.js';
import userRouter from './user.js';
import genderRouter from './gender.js';
import brandRouter from './brand.js';
import addressRouter from './address.js';
import tagRouter from './tag.js';
import labelRouter from './label.js';
import colorRouter from './color.js';
import sizeRouter from './size.js';
import voucherRouter from './voucher.js';
import voucherTypeRouter from './voucher_type.js';
import paymentStatusRouter from './payment_status.js';
import paymentTypeRouter from './payment_type.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/roles', roleRouter);
router.use('/permissions', permissionRouter);
router.use('/genders', genderRouter);
router.use('/brands', brandRouter);
router.use('/address', addressRouter);
router.use('/tags', tagRouter);
router.use('/labels', labelRouter);
router.use('/vouchers', voucherRouter);
router.use('/voucher-types', voucherTypeRouter);
router.use('/colors', colorRouter);
router.use('/sizes', sizeRouter);
router.use('/payment-statuses', paymentStatusRouter);
router.use('/payment-types', paymentTypeRouter);

export default router;
