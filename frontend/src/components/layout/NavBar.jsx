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
  BookMarked,
  Users
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
    <nav className="bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-100 fixed top-0 left-0 right-0 z-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-between items-center h-20 w-full min-w-0">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 group-hover:scale-105 transition-transform duration-200 shadow-lg">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                Chemistry Explorer
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 flex-1 justify-end">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-48 px-3 py-2 pl-10 pr-3 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </form>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1 ml-4">
              <Link
                to="/"
                className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-full transition-all duration-200"
              >
                Home
              </Link>
              
              <Link
                to="/quiz"
                className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-full transition-all duration-200 group"
              >
                <Trophy className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-200" />
                Quiz
              </Link>
              
              <Link
                to="/periodic-table"
                className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-full transition-all duration-200 group"
              >
                <Atom className="w-4 h-4 mr-1 group-hover:rotate-180 transition-transform duration-300" />
                Chemistry Games
              </Link>
              
              <Link
                to="/about"
                className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-full transition-all duration-200 group"
              >
                <Users className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-200" />
                About Us
              </Link>
            </div>

            {/* User Section */}
            {user ? (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                <Link
                  to="/dashboard"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
                >
                  <BookMarked className="w-4 h-4 mr-1" />
                  Dashboard
                </Link>
                
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                    {user.name}
                  </span>
                  <Button
                    onClick={handleLogout}
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-3 py-1 rounded-full text-sm font-medium transition-all duration-200"
                  >
                    Logout
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                <Link
                  to="/login"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:bg-gray-50"
                >
                  Sign In
                </Link>
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Medium Screen Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-1 flex-1 justify-end">
            {/* Simplified navigation for medium screens */}
            <div className="flex items-center space-x-1">
              <Link
                to="/quiz"
                className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
                title="Quiz"
              >
                <Trophy className="w-4 h-4" />
              </Link>
              
              <Link
                to="/periodic-table"
                className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
                title="Chemistry Games"
              >
                <Atom className="w-4 h-4" />
              </Link>
              
              <Link
                to="/about"
                className="flex items-center px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
                title="About Us"
              >
                <Users className="w-4 h-4" />
              </Link>
            </div>

            {user ? (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                <Link
                  to="/dashboard"
                  className="flex items-center px-2 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200"
                >
                  <BookMarked className="w-4 h-4" />
                </Link>
                
                <Button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full text-sm transition-all duration-200"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
                <Link to="/login">
                  <Button variant="outline" className="px-3 py-1 text-sm rounded-full">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    Start
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-3 rounded-full text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 hover:shadow-md"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-4 space-y-2 sm:px-4 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search elements..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 pr-4 text-sm bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </form>

              {/* Mobile Navigation Links */}
              <Link
                to="/"
                className="flex items-center px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200 hover:shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link
                to="/quiz"
                className="flex items-center px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200 hover:shadow-sm group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Trophy className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                Quiz
              </Link>
              
              <Link
                to="/periodic-table"
                className="flex items-center px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200 hover:shadow-sm group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Atom className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-300" />
                Chemistry Games
              </Link>
              
              <Link
                to="/about"
                className="flex items-center px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200 hover:shadow-sm group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                About Us
              </Link>
              
              
              <Link
                to="/contact"
                className="flex items-center px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200 hover:shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
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
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl transition-all duration-200 hover:shadow-lg text-center"
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
