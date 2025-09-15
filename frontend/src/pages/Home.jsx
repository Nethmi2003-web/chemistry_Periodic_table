import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/ui/Button'
import { Atom, TestTube, Calculator, BookOpen, Star, Trophy } from 'lucide-react'

const Home = () => {
  const { user } = useAuth()

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700" style={{
        backgroundImage: `
          linear-gradient(135deg, #1E90FF 0%, #4169E1 25%, #32CD32 50%, #FF69B4 75%, #FF4500 100%),
          url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}>
        {/* Chemistry Pattern Overlay */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 rounded-full opacity-20" style={{ borderColor: '#F5F5F5' }}></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 rounded-full opacity-15" style={{ borderColor: '#DCDCDC' }}></div>
          <div className="absolute bottom-40 left-20 w-40 h-40 border-2 rounded-full opacity-10" style={{ borderColor: '#32CD32' }}></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 border-2 rounded-full opacity-20" style={{ borderColor: '#FF69B4' }}></div>
          
          {/* Molecular Structure Pattern */}
          <div className="absolute top-32 left-1/4 w-16 h-16 border rounded-full opacity-15" style={{ borderColor: '#1E90FF' }}></div>
          <div className="absolute top-32 left-1/4 w-16 h-16 border rounded-full opacity-15 transform translate-x-8" style={{ borderColor: '#4169E1' }}></div>
          <div className="absolute top-32 left-1/4 w-16 h-16 border rounded-full opacity-15 transform translate-x-4 translate-y-8" style={{ borderColor: '#FF4500' }}></div>
          
          <div className="absolute bottom-32 right-1/4 w-12 h-12 border rounded-full opacity-15" style={{ borderColor: '#F5F5F5' }}></div>
          <div className="absolute bottom-32 right-1/4 w-12 h-12 border rounded-full opacity-15 transform translate-x-6" style={{ borderColor: '#32CD32' }}></div>
          <div className="absolute bottom-32 right-1/4 w-12 h-12 border rounded-full opacity-15 transform translate-x-3 translate-y-6" style={{ borderColor: '#DCDCDC' }}></div>
        </div>
        
        {/* Floating Chemistry Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <Atom className="absolute top-20 left-1/4 w-8 h-8 opacity-30 animate-pulse" style={{ color: '#F5F5F5' }} />
          <TestTube className="absolute top-40 right-1/3 w-6 h-6 opacity-30 animate-pulse" style={{ color: '#32CD32', animationDelay: '1s' }} />
          <Calculator className="absolute bottom-40 left-1/3 w-7 h-7 opacity-30 animate-pulse" style={{ color: '#DCDCDC', animationDelay: '2s' }} />
          <BookOpen className="absolute bottom-20 right-1/4 w-6 h-6 opacity-30 animate-pulse" style={{ color: '#FF69B4', animationDelay: '3s' }} />
          <Star className="absolute top-60 left-1/2 w-5 h-5 opacity-30 animate-pulse" style={{ color: '#FF4500', animationDelay: '4s' }} />
          <Trophy className="absolute bottom-60 right-1/2 w-6 h-6 opacity-30 animate-pulse" style={{ color: '#1E90FF', animationDelay: '5s' }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center py-20">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6 backdrop-blur-sm">
              <Atom className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6 drop-shadow-lg" style={{ color: '#F5F5F5', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Chemistry Periodic Table
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed" style={{ color: '#F5F5F5', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Explore the fascinating world of chemistry with our interactive periodic table. 
            Learn about elements, their properties, and discover the building blocks of matter.
          </p>
          
          {user ? (
            <div className="space-x-4">
              <Link to="/dashboard">
                <Button size="lg" variant="primary" className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl">
                  Go to Dashboard
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-x-4">
              <Link to="/register">
                <Button size="lg" variant="primary" className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl border-2 border-white">
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="bg-white text-blue-900 hover:bg-blue-50 shadow-xl border-2 border-white">
                  Sign In
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 py-16">
          <div className="text-center p-8 bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-xl border border-white border-opacity-20 hover:bg-opacity-100 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Atom className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Interactive Elements</h3>
            <p className="text-gray-600 leading-relaxed">
              Click on any element to learn about its properties, atomic structure, and uses.
            </p>
          </div>

          <div className="text-center p-8 bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-xl border border-white border-opacity-20 hover:bg-opacity-100 transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Educational Content</h3>
            <p className="text-gray-600 leading-relaxed">
              Access detailed information about each element including history, discovery, and applications.
            </p>
          </div>

          <div className="text-center p-8 bg-white bg-opacity-95 backdrop-blur-sm rounded-xl shadow-xl border border-white border-opacity-20 hover:bg-opacity-100 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Progress Tracking</h3>
            <p className="text-gray-600 leading-relaxed">
              Track your learning progress and save your favorite elements for quick access.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        {!user && (
          <div className="text-center py-20">
            <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white border-opacity-20 p-12 max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Join thousands of students and chemistry enthusiasts exploring the periodic table.
              </p>
              <Link to="/register">
                <Button size="lg" variant="primary" className="bg-blue-600 hover:bg-blue-700 text-white shadow-xl px-8 py-4 text-lg">
                  Create Free Account
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
