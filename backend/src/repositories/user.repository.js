const User = require('../models/user.model');
const logger = require('../utils/logger');

class UserRepository {
  // Create a new user
  async create(userData) {
    try {
      const user = new User(userData);
      return await user.save();
    } catch (error) {
      logger.error('User repository - create error:', error);
      throw error;
    }
  }

  // Find user by ID
  async findById(id) {
    try {
      return await User.findById(id).select('-password');
    } catch (error) {
      logger.error('User repository - findById error:', error);
      throw error;
    }
  }

  // Find user by email (includes password for authentication)
  async findByEmail(email) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      logger.error('User repository - findByEmail error:', error);
      throw error;
    }
  }

  // Find user by email (without password)
  async findByEmailPublic(email) {
    try {
      return await User.findOne({ email }).select('-password');
    } catch (error) {
      logger.error('User repository - findByEmailPublic error:', error);
      throw error;
    }
  }

  // Update user by ID
  async updateById(id, updateData) {
    try {
      return await User.findByIdAndUpdate(
        id,
        updateData,
        { new: true, runValidators: true }
      ).select('-password');
    } catch (error) {
      logger.error('User repository - updateById error:', error);
      throw error;
    }
  }

  // Delete user by ID
  async deleteById(id) {
    try {
      return await User.findByIdAndDelete(id);
    } catch (error) {
      logger.error('User repository - deleteById error:', error);
      throw error;
    }
  }

  // Find all users
  async findAll(options = {}) {
    try {
      const { page = 1, limit = 10, sort = '-createdAt' } = options;
      const skip = (page - 1) * limit;

      const users = await User.find()
        .select('-password')
        .sort(sort)
        .skip(skip)
        .limit(limit);

      const total = await User.countDocuments();

      return {
        users,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          totalUsers: total,
          hasNextPage: page < Math.ceil(total / limit),
          hasPrevPage: page > 1
        }
      };
    } catch (error) {
      logger.error('User repository - findAll error:', error);
      throw error;
    }
  }

  // Search users
  async searchUsers(searchTerm, options = {}) {
    try {
      const { page = 1, limit = 10 } = options;
      const skip = (page - 1) * limit;

      const query = {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { email: { $regex: searchTerm, $options: 'i' } }
        ]
      };

      const users = await User.find(query)
        .select('-password')
        .sort('-createdAt')
        .skip(skip)
        .limit(limit);

      const total = await User.countDocuments(query);

      return {
        users,
        pagination: {
          currentPage: page,
          totalPages: Math.ceil(total / limit),
          totalUsers: total,
          hasNextPage: page < Math.ceil(total / limit),
          hasPrevPage: page > 1
        }
      };
    } catch (error) {
      logger.error('User repository - searchUsers error:', error);
      throw error;
    }
  }

  // Check if user exists
  async exists(email) {
    try {
      const user = await User.findOne({ email });
      return !!user;
    } catch (error) {
      logger.error('User repository - exists error:', error);
      throw error;
    }
  }

  // Get user count
  async count() {
    try {
      return await User.countDocuments();
    } catch (error) {
      logger.error('User repository - count error:', error);
      throw error;
    }
  }
}

module.exports = new UserRepository();
