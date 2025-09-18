import { Routes, Route, useLocation } from 'react-router-dom'
import { useAuth } from './contexts/AuthContext'
import ProtectedRoute from './components/layout/ProtectedRoute'
import NavBar from './components/layout/NavBar'

// Pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import PeriodicTable from './pages/PeriodicTable'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

function App() {
  const { user, loading } = useAuth()
  const location = useLocation()
  
  // Pages that don't need the main layout (NavBar + container)
  const authPages = ['/login', '/register']
  const isAuthPage = authPages.includes(location.pathname)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  // Auth pages get their own full layout
  if (isAuthPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    )
  }

  // All other pages get the standard layout
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/periodic-table" element={<PeriodicTable />} />
          
          {/* Protected routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          
          {/* Catch all route */}
          <Route path="*" element={
            <div className="text-center py-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-gray-600">Page not found</p>
            </div>
          } />
        </Routes>
      </main>
    </div>
  )
}

export default App
