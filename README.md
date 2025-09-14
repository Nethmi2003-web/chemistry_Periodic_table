# Chemistry Periodic Table - MERN Stack Application

A full-stack web application for exploring the periodic table of elements, built with the MERN stack (MongoDB, Express.js, React, Node.js).

## 🚀 Features

- **Interactive Periodic Table**: Explore all 118 elements with detailed information
- **User Authentication**: Secure registration and login system
- **User Dashboard**: Track learning progress and favorite elements
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface built with React and Tailwind CSS
- **RESTful API**: Well-structured backend API with proper error handling
- **Database Integration**: MongoDB with Mongoose for data persistence
- **Docker Support**: Easy deployment with Docker and Docker Compose

## 🏗️ Project Structure

```
chemistry_Periodic_table/
├── backend/                 # Node.js + Express API
│   ├── src/
│   │   ├── api/            # API routes and controllers
│   │   ├── config/         # Database configuration
│   │   ├── middlewares/    # Custom middleware
│   │   ├── models/         # Mongoose models
│   │   ├── repositories/   # Data access layer
│   │   ├── services/       # Business logic
│   │   ├── utils/          # Utility functions
│   │   ├── scripts/        # Database seeding scripts
│   │   └── tests/          # Backend tests
│   ├── package.json
│   ├── Dockerfile
│   └── env.example
├── frontend/               # React + Vite application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API service layer
│   │   ├── store/          # State management
│   │   ├── styles/         # CSS styles
│   │   └── tests/          # Frontend tests
│   ├── package.json
│   ├── vite.config.js
│   ├── Dockerfile
│   └── nginx.conf
├── docker-compose.yml      # Docker orchestration
├── nginx.conf             # Nginx configuration
├── mongo-init.js          # MongoDB initialization
└── README.md
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Jest** - Testing framework
- **Winston** - Logging

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **React Query** - Data fetching and caching
- **Zustand** - State management
- **Tailwind CSS** - Utility-first CSS
- **Axios** - HTTP client
- **Vitest** - Testing framework

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Reverse proxy and load balancer

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (v7.0 or higher)
- Docker and Docker Compose (optional)

### Option 1: Docker Setup (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chemistry_Periodic_table
   ```

2. **Start all services with Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

### Option 2: Manual Setup

#### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment configuration**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/chemistry_periodic_table
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_EXPIRE=7d
   CLIENT_URL=http://localhost:3000
   ```

4. **Start MongoDB** (if not using Docker)
   ```bash
   mongod
   ```

5. **Seed the database** (optional)
   ```bash
   npm run seed
   ```

6. **Start the backend server**
   ```bash
   npm run dev
   ```

#### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment configuration**
   Create `.env` file:
   ```env
   VITE_API_URL=http://localhost:5000/api/v1
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user
- `GET /api/v1/auth/me` - Get user profile
- `PUT /api/v1/auth/profile` - Update user profile
- `DELETE /api/v1/auth/account` - Delete user account

### User Endpoints

- `GET /api/v1/users` - Get all users (admin only)
- `GET /api/v1/users/:id` - Get user by ID

### Example API Usage

```javascript
// Register a new user
const response = await fetch('/api/v1/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
  })
});

// Login user
const loginResponse = await fetch('/api/v1/auth/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email: 'john@example.com',
    password: 'password123'
  })
});

const { token } = await loginResponse.json();

// Get user profile
const profileResponse = await fetch('/api/v1/auth/me', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### Run All Tests
```bash
# From project root
npm run test:all
```

## 🐳 Docker Commands

```bash
# Build and start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# Remove all containers and volumes
docker-compose down -v
```

## 🔧 Development

### Available Scripts

#### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests
- `npm run seed` - Seed database with sample data

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

### Code Structure

The project follows a clean architecture pattern:

- **Controllers** handle HTTP requests and responses
- **Services** contain business logic
- **Repositories** handle data access
- **Models** define data schemas
- **Middlewares** handle cross-cutting concerns
- **Utils** contain helper functions

## 🚀 Deployment

### Production Environment Variables

#### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://your-mongodb-connection-string
JWT_SECRET=your-super-secure-jwt-secret
JWT_EXPIRE=7d
CLIENT_URL=https://your-frontend-domain.com
```

#### Frontend (.env)
```env
VITE_API_URL=https://your-backend-domain.com/api/v1
```

### Deployment Options

1. **Docker Deployment**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

2. **Cloud Platforms**
   - **Backend**: Deploy to Heroku, Railway, or DigitalOcean
   - **Frontend**: Deploy to Vercel, Netlify, or AWS S3
   - **Database**: Use MongoDB Atlas or AWS DocumentDB

3. **VPS Deployment**
   - Use PM2 for process management
   - Configure Nginx as reverse proxy
   - Set up SSL certificates with Let's Encrypt

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/your-username/chemistry_Periodic_table/issues) page
2. Create a new issue with detailed information
3. Contact the maintainers

## 🎯 Roadmap

- [ ] Interactive periodic table visualization
- [ ] Element search and filtering
- [ ] Quiz system for learning
- [ ] Progress tracking and analytics
- [ ] Mobile app (React Native)
- [ ] Advanced element properties
- [ ] Chemical reaction simulator
- [ ] Offline support with PWA

## 🙏 Acknowledgments

- Periodic table data from various chemistry resources
- Icons from Lucide React
- UI components inspired by modern design systems
- Community contributions and feedback

---

**Happy Learning Chemistry! 🧪⚛️**
Periodic table for Advance level student
