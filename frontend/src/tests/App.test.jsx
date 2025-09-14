import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import App from '../App'
import { AuthProvider } from '../contexts/AuthContext'

// Mock the auth service
jest.mock('../services/auth.service', () => ({
  authService: {
    getProfile: jest.fn(),
    login: jest.fn(),
    register: jest.fn(),
    logout: jest.fn(),
  }
}))

const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const TestWrapper = ({ children }) => {
  const queryClient = createTestQueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          {children}
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    )
    
    expect(screen.getByText('Chemistry Periodic Table')).toBeInTheDocument()
  })

  it('shows loading spinner initially', () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    )
    
    // The loading spinner should be present initially
    expect(document.querySelector('.animate-spin')).toBeInTheDocument()
  })

  it('renders navigation bar', () => {
    render(
      <TestWrapper>
        <App />
      </TestWrapper>
    )
    
    expect(screen.getByText('Chemistry')).toBeInTheDocument()
  })
})
