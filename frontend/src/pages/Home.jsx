import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { 
  Atom, 
  TestTube, 
  Calculator, 
  BookOpen, 
  Star, 
  Trophy, 
  BeakerIcon, 
  FlaskConical,
  Microscope,
  GraduationCap,
  ChevronRight,
  ArrowRight,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Clock
} from 'lucide-react'

const Home = () => {
  const { user } = useAuth()
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3Ccircle cx='53' cy='7' r='7'/%3E%3Ccircle cx='7' cy='53' r='7'/%3E%3Ccircle cx='53' cy='53' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.2
        }}></div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="max-w-6xl mx-auto px-4 text-center text-white">
      <motion.div
              initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mx-auto mb-8 w-24 h-24 text-blue-400"
        >
          <Atom className="w-full h-full" />
        </motion.div>
        
              <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
                Discover the World of
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Chemistry
                </span>
        </h1>
        
              <p className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                With a reputation for excellence in chemical education, Chemistry Explorer is all about giving you 
                an uncomplicated journey through the periodic table and beyond.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/periodic-table">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Explore Elements
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                
                <Link to="/quiz">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Test Your Knowledge
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Chemistry Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into different areas of chemistry with our comprehensive tools and resources
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Atom className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Elements & Periodic Table</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 text-base">
                    Discover all 118 elements with detailed properties, electron configurations, and interactive visualizations.
                  </CardDescription>
                  <Link to="/periodic-table">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Explore Elements
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <TestTube className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Lab Tools & Calculations</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 text-base">
                    Access molecular weight calculators, unit converters, and essential laboratory calculation tools.
                  </CardDescription>
                  <Link to="/calculator">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      Use Calculators
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Student Resources</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 text-base">
                    Study guides, practice quizzes, and educational materials for chemistry students at all levels.
                  </CardDescription>
                  <Link to="/study-guide">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      Study Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:scale-105 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Microscope className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Advanced Chemistry</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 text-base">
                    Explore advanced topics, research tools, and professional-grade chemistry resources.
                  </CardDescription>
                  <Link to="/quiz">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Explore Advanced
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Chemistry Explorer Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What makes us different? It's how we make chemistry accessible and engaging for everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Topic</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Select from our comprehensive range of chemistry topics, from basic elements to advanced molecular structures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Learning</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Engage with our interactive tools, 3D visualizations, and hands-on calculators to deepen your understanding.
        </p>
      </motion.div>

      <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Master Chemistry</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Test your knowledge with quizzes, track your progress, and become confident in your chemistry skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Elements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Elements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of the most fascinating and important elements in the periodic table
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">Au</div>
                    <div className="text-xl">Gold</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Gold (Au)</CardTitle>
                  <CardDescription>Atomic Number: 79 | Noble Metal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    A precious metal known for its beauty, durability, and excellent conductivity. Used in jewelry, electronics, and medicine.
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-yellow-50">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">O</div>
                    <div className="text-xl">Oxygen</div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Oxygen (O)</CardTitle>
                  <CardDescription>Atomic Number: 8 | Nonmetal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Essential for life on Earth, oxygen is crucial for respiration and combustion. Makes up about 21% of Earth's atmosphere.
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-blue-50">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold mb-2">C</div>
                    <div className="text-xl">Carbon</div>
                  </div>
                </div>
          <CardHeader>
                  <CardTitle className="text-2xl">Carbon (C)</CardTitle>
                  <CardDescription>Atomic Number: 6 | Nonmetal</CardDescription>
          </CardHeader>
          <CardContent>
                  <p className="text-gray-600 mb-4">
                    The foundation of organic chemistry and all known life. Forms millions of compounds and exists in various allotropes.
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-gray-50">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
          </CardContent>
        </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog/Articles Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Chemistry Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest discoveries, educational content, and chemistry news
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
          <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                    <BeakerIcon className="w-16 h-16 text-white" />
                  </div>
                  <CardTitle className="text-xl">The Future of Green Chemistry</CardTitle>
                  <CardDescription className="text-sm text-gray-500">March 15, 2024</CardDescription>
          </CardHeader>
          <CardContent>
                  <p className="text-gray-600 mb-4">
                    Discover how sustainable chemistry practices are revolutionizing the industry and protecting our environment.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
          </CardContent>
        </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
          <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg mb-4 flex items-center justify-center">
                    <FlaskConical className="w-16 h-16 text-white" />
                  </div>
                  <CardTitle className="text-xl">Understanding Molecular Bonds</CardTitle>
                  <CardDescription className="text-sm text-gray-500">March 10, 2024</CardDescription>
          </CardHeader>
          <CardContent>
                  <p className="text-gray-600 mb-4">
                    A comprehensive guide to ionic, covalent, and metallic bonds with interactive examples and visualizations.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg mb-4 flex items-center justify-center">
                    <Atom className="w-16 h-16 text-white" />
                  </div>
                  <CardTitle className="text-xl">New Elements Discovery</CardTitle>
                  <CardDescription className="text-sm text-gray-500">March 5, 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Learn about the latest superheavy elements added to the periodic table and their unique properties.
                  </p>
                  <Button variant="outline" className="w-full">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <Mail className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Chemistry Insights in Your Inbox
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest chemistry discoveries, educational resources, and interactive content delivered to your email.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <Button
                  type="submit"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 font-semibold"
                >
                  Subscribe
            </Button>
              </div>
            </form>
      </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Atom className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Chemistry Explorer</span>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Your comprehensive platform for exploring the fascinating world of chemistry. 
                From interactive periodic tables to advanced calculations, we make chemistry accessible to everyone.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/periodic-table" className="text-gray-300 hover:text-white transition-colors">Periodic Table</Link></li>
                <li><Link to="/elements" className="text-gray-300 hover:text-white transition-colors">Elements</Link></li>
                <li><Link to="/calculator" className="text-gray-300 hover:text-white transition-colors">Calculators</Link></li>
                <li><Link to="/quiz" className="text-gray-300 hover:text-white transition-colors">Quiz</Link></li>
                <li><Link to="/study-guide" className="text-gray-300 hover:text-white transition-colors">Study Guide</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">123 Chemistry Lane, Science City, SC 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">info@chemistryexplorer.com</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-blue-400" />
                  <span className="text-gray-300">24/7 Online Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2024 Chemistry Explorer. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
