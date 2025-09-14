const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

// Import controllers
const userController = require('../controllers/user.controller');

// Import middlewares
const { authMiddleware } = require('../../middlewares/authMiddleware');

// User routes
router.post('/auth/register', [
  body('name').trim().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userController.register);

router.post('/auth/login', [
  body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required')
], userController.login);
router.post('/auth/logout', authMiddleware, userController.logout);
router.get('/auth/me', authMiddleware, userController.getProfile);
router.put('/auth/profile', [
  authMiddleware,
  body('name').optional().trim().isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters'),
  body('email').optional().isEmail().normalizeEmail().withMessage('Please provide a valid email')
], userController.updateProfile);
router.delete('/auth/account', authMiddleware, userController.deleteAccount);

// Protected user routes
router.get('/users', authMiddleware, userController.getAllUsers);
router.get('/users/:id', authMiddleware, userController.getUserById);

module.exports = router;
