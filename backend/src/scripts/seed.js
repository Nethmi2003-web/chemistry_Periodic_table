const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('../models/user.model');
const logger = require('../utils/logger');

// Sample data
const sampleUsers = [
  {
    name: 'Admin User',
    email: 'admin@chemistry.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123'
  },
  {
    name: 'Chemistry Student',
    email: 'student@chemistry.com',
    password: 'student123'
  }
];

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/chemistry_periodic_table');
    logger.info('Connected to MongoDB for seeding');
  } catch (error) {
    logger.error('Database connection failed:', error);
    process.exit(1);
  }
};

const seedUsers = async () => {
  try {
    // Clear existing users
    await User.deleteMany({});
    logger.info('Cleared existing users');

    // Hash passwords and create users
    const users = [];
    for (const userData of sampleUsers) {
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
      
      users.push({
        ...userData,
        password: hashedPassword
      });
    }

    // Insert users
    const createdUsers = await User.insertMany(users);
    logger.info(`Created ${createdUsers.length} users`);

    // Log created users (without passwords)
    createdUsers.forEach(user => {
      logger.info(`Created user: ${user.name} (${user.email}) - Role: ${user.role}`);
    });

  } catch (error) {
    logger.error('Error seeding users:', error);
    throw error;
  }
};

const seedDatabase = async () => {
  try {
    await connectDB();
    await seedUsers();
    
    logger.info('Database seeding completed successfully');
    process.exit(0);
  } catch (error) {
    logger.error('Database seeding failed:', error);
    process.exit(1);
  }
};

// Run seeding if this file is executed directly
if (require.main === module) {
  seedDatabase();
}

module.exports = { seedDatabase, seedUsers };
