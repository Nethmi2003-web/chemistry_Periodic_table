import { api } from './api'

class AuthService {
  // Register new user
  async register(name, email, password) {
    const response = await api.post('/auth/register', {
      name,
      email,
      password
    })
    return response.data
  }

  // Login user
  async login(email, password) {
    const response = await api.post('/auth/login', {
      email,
      password
    })
    return response.data
  }

  // Logout user
  async logout() {
    const response = await api.post('/auth/logout')
    return response.data
  }

  // Get user profile
  async getProfile() {
    const response = await api.get('/auth/me')
    return response.data
  }

  // Update user profile
  async updateProfile(data) {
    const response = await api.put('/auth/profile', data)
    return response.data
  }

  // Delete user account
  async deleteAccount() {
    const response = await api.delete('/auth/account')
    return response.data
  }

  // Get all users (admin only)
  async getAllUsers() {
    const response = await api.get('/users')
    return response.data
  }

  // Get user by ID
  async getUserById(id) {
    const response = await api.get(`/users/${id}`)
    return response.data
  }
}

export const authService = new AuthService()
export default authService
