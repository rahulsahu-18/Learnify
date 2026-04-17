import express from 'express';
import { createCheckoutSession, getCourseDetailWithPurchaseStatus, stripeWebhook } from '../controller/coursePurchaseController.js';
import isAuth from '../middleware/isAuth.js'
const purchase = express.Router();

purchase.post("/checkout/create-checkout-session",isAuth,createCheckoutSession);
purchase.post("/webhook",express.raw({type:"application/json"}),stripeWebhook);
purchase.get('/course/:courseId/detail-with-status',isAuth,getCourseDetailWithPurchaseStatus);

export default purchase;