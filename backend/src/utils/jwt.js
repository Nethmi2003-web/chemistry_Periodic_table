const jwt = require('jsonwebtoken');
const logger = require('./logger');

class JWTUtils {
  constructor() {
    this.secret = process.env.JWT_SECRET || 'fallback_secret_key';
    this.expiresIn = process.env.JWT_EXPIRE || '7d';
  }

  // Generate JWT token
  generateToken(payload) {
    try {
      return jwt.sign(payload, this.secret, {
        expiresIn: this.expiresIn,
        issuer: 'chemistry-app',
        audience: 'chemistry-users'
      });
    } catch (error) {
      logger.error('JWT generation error:', error);
      throw new Error('Token generation failed');
    }
  }

  // Verify JWT token
  verifyToken(token) {
    try {
      return jwt.verify(token, this.secret, {
        issuer: 'chemistry-app',
        audience: 'chemistry-users'
      });
    } catch (error) {
      logger.error('JWT verification error:', error);
      
      if (error.name === 'TokenExpiredError') {
        throw new Error('Token has expired');
      } else if (error.name === 'JsonWebTokenError') {
        throw new Error('Invalid token');
      } else {
        throw new Error('Token verification failed');
      }
    }
  }

  // Decode token without verification (for debugging)
  decodeToken(token) {
    try {
      return jwt.decode(token);
    } catch (error) {
      logger.error('JWT decode error:', error);
      return null;
    }
  }

  // Generate refresh token
  generateRefreshToken(payload) {
    try {
      return jwt.sign(payload, this.secret, {
        expiresIn: '30d',
        issuer: 'chemistry-app',
        audience: 'chemistry-users'
      });
    } catch (error) {
      logger.error('Refresh token generation error:', error);
      throw new Error('Refresh token generation failed');
    }
  }

  // Verify refresh token
  verifyRefreshToken(token) {
    try {
      return jwt.verify(token, this.secret, {
        issuer: 'chemistry-app',
        audience: 'chemistry-users'
      });
    } catch (error) {
      logger.error('Refresh token verification error:', error);
      throw new Error('Invalid refresh token');
    }
  }

  // Get token expiration time
  getTokenExpiration(token) {
    try {
      const decoded = this.decodeToken(token);
      return decoded ? new Date(decoded.exp * 1000) : null;
    } catch (error) {
      logger.error('Get token expiration error:', error);
      return null;
    }
  }

  // Check if token is expired
  isTokenExpired(token) {
    try {
      const expiration = this.getTokenExpiration(token);
      return expiration ? expiration < new Date() : true;
    } catch (error) {
      logger.error('Check token expiration error:', error);
      return true;
    }
  }
}

module.exports = new JWTUtils();
