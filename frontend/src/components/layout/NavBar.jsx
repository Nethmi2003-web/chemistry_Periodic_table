import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Button from '../ui/Button'
import { 
  Search, 
  BookOpen, 
  Calculator, 
  TestTube, 
  Atom, 
  Menu, 
  X,
  Star,
  Trophy,
  BookMarked
} from 'lucide-react'

const NavBar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // TODO: Implement search functionality
      console.log('Searching for:', searchQuery)
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Chemistry</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search elements..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </form>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1 ml-4">
              <Link
                to="/periodic-table"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                <Atom className="w-4 h-4 mr-1" />
                Periodic Table
              </Link>
              
              <Link
                to="/elements"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                <TestTube className="w-4 h-4 mr-1" />
                Elements
              </Link>
              
              <Link
                to="/calculator"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                <Calculator className="w-4 h-4 mr-1" />
                Calculator
              </Link>
              
              <Link
                to="/quiz"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                <Trophy className="w-4 h-4 mr-1" />
                Quiz
              </Link>
              
              <Link
                to="/study-guide"
                className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                <BookOpen className="w-4 h-4 mr-1" />
                Study Guide
              </Link>
            </div>

            {/* User Section */}
            {user ? (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                <Link
                  to="/favorites"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  <Star className="w-4 h-4 mr-1" />
                  Favorites
                </Link>
                
                <Link
                  to="/dashboard"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                >
                  <BookMarked className="w-4 h-4 mr-1" />
                  Dashboard
                </Link>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-700">
                    Welcome, {user.name}
                  </span>
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    size="sm"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Link to="/register">
                  <Button size="sm">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search elements..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 pr-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </form>

              {/* Mobile Navigation Links */}
              <Link
                to="/periodic-table"
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Atom className="w-5 h-5 mr-2" />
                Periodic Table
              </Link>
              
              <Link
                to="/elements"
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <TestTube className="w-5 h-5 mr-2" />
                Elements
              </Link>
              
              <Link
                to="/calculator"
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculator
              </Link>
              
              <Link
                to="/quiz"
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Trophy className="w-5 h-5 mr-2" />
                Quiz
              </Link>
              
              <Link
                to="/study-guide"
                className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Study Guide
              </Link>

              {user ? (
                <>
                  <Link
                    to="/favorites"
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Star className="w-5 h-5 mr-2" />
                    Favorites
                  </Link>
                  
                  <Link
                    to="/dashboard"
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <BookMarked className="w-5 h-5 mr-2" />
                    Dashboard
                  </Link>
                  
                  <div className="pt-2 border-t border-gray-200">
                    <div className="px-3 py-2 text-sm text-gray-500">
                      Welcome, {user.name}
                    </div>
                    <button
                      onClick={() => {
                        handleLogout()
                        setIsMobileMenuOpen(false)
                      }}
                      className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <div className="pt-2 border-t border-gray-200 space-y-2">
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
