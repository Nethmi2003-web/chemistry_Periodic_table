const bcrypt = require('bcryptjs');
const jwt = require('../utils/jwt');
const userRepository = require('../repositories/user.repository');
const logger = require('../utils/logger');

class AuthService {
  // Register a new user
  async registerUser(userData) {
    try {
      const { name, email, password } = userData;

      // Hash password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Create user
      const user = await userRepository.create({
        name,
        email,
        password: hashedPassword
      });

      // Generate JWT token
      const token = jwt.generateToken({ id: user._id, email: user.email });

      return {
        ...user.toObject(),
        token
      };
    } catch (error) {
      logger.error('Auth service - register error:', error);
      throw error;
    }
  }

  // Login user
  async loginUser(email, password) {
    try {
      // Find user by email
      const user = await userRepository.findByEmail(email);
      
      if (!user) {
        return {
          success: false,
          message: 'Invalid credentials'
        };
      }

      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (!isPasswordValid) {
        return {
          success: false,
          message: 'Invalid credentials'
        };
      }

      // Generate JWT token
      const token = jwt.generateToken({ id: user._id, email: user.email });

      return {
        success: true,
        data: {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt
          },
          token
        }
      };
    } catch (error) {
      logger.error('Auth service - login error:', error);
      throw error;
    }
  }

  // Verify JWT token
  async verifyToken(token) {
    try {
      const decoded = jwt.verifyToken(token);
      const user = await userRepository.findById(decoded.id);
      
      if (!user) {
        return {
          success: false,
          message: 'User not found'
        };
      }

      return {
        success: true,
        user: {
          id: user._id,
          email: user.email,
          name: user.name
        }
      };
    } catch (error) {
      logger.error('Auth service - verify token error:', error);
      return {
        success: false,
        message: 'Invalid token'
      };
    }
  }

  // Change password
  async changePassword(userId, currentPassword, newPassword) {
    try {
      const user = await userRepository.findById(userId);
      
      if (!user) {
        return {
          success: false,
          message: 'User not found'
        };
      }

      // Verify current password
      const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);
      
      if (!isCurrentPasswordValid) {
        return {
          success: false,
          message: 'Current password is incorrect'
        };
      }

      // Hash new password
      const saltRounds = 12;
      const hashedNewPassword = await bcrypt.hash(newPassword, saltRounds);

      // Update password
      await userRepository.updateById(userId, { password: hashedNewPassword });

      return {
        success: true,
        message: 'Password changed successfully'
      };
    } catch (error) {
      logger.error('Auth service - change password error:', error);
      throw error;
    }
  }
}

module.exports = new AuthService();
