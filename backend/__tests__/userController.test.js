import { jest } from '@jest/globals';
import httpMocks from 'node-mocks-http';

// Mock modules
const findOneMock = jest.fn();
const saveMock = jest.fn();

// mock constructor function
const MockUserModel = jest.fn().mockImplementation(() => ({
  save: saveMock,
}));
MockUserModel.findOne = findOneMock;

jest.unstable_mockModule('../models/userModel.js', () => ({
  default: MockUserModel,
}));

// Mock bcrypt
jest.unstable_mockModule('bcrypt', () => {
  const mockBcrypt = {
    compare: jest.fn(),
    genSalt: jest.fn(),
    hash: jest.fn(),
  };
  return {
    default: mockBcrypt,
    ...mockBcrypt,
  };
});

// Mock jsonwebtoken
jest.unstable_mockModule('jsonwebtoken', () => {
  const mockJwt = {
    sign: jest.fn(),
  };
  return {
    default: mockJwt,
    ...mockJwt, // Also provide named exports
  };
});

const userModel = (await import('../models/userModel.js')).default;
const bcrypt = await import('bcrypt');
const jwt = await import('jsonwebtoken');
const { loginUser, registerUser, adminLogin } = await import('../controllers/userController.js');

describe('userController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loginUser', () => {
    it('should login a user with correct credentials', async () => {
      const req = httpMocks.createRequest({
        method: 'POST',
        body: {
          email: 'test@example.com',
          password: 'password123',
        },
      });
      const res = httpMocks.createResponse();

      // Mock the database response
      findOneMock.mockResolvedValue({
        _id: '123',
        email: 'test@example.com',
        password: 'hashed',
      });
      
      // Mock bcrypt.compare to return true
      bcrypt.compare.mockResolvedValue(true);
      // Mock jwt.sign to return a token
      jwt.sign.mockReturnValue('mocked-token');

      await loginUser(req, res);
      
      const data = res._getJSONData();
      console.log('Login response:', data); // Debug log
      
      expect(res.statusCode).toBe(200);
      expect(data.success).toBe(true);
      expect(data.token).toBe('mocked-token');
    });
  });

  describe('registerUser', () => {
    it('should register a new user', async () => {
      const req = httpMocks.createRequest({
        method: 'POST',
        body: {
          name: 'Test User',
          email: 'new@example.com',
          password: 'strongpassword',
        },
      });
      const res = httpMocks.createResponse();

      // Mock user doesn't exist yet
      findOneMock.mockResolvedValue(null);
      // Mock bcrypt functions
      bcrypt.genSalt.mockResolvedValue('salt');
      bcrypt.hash.mockResolvedValue('hashedpassword');
      // Mock successful save
      saveMock.mockResolvedValue({ 
        _id: '123',
        name: 'Test User',
        email: 'new@example.com'
      });
      // Mock JWT token generation
      jwt.sign.mockReturnValue('mocked-token');

      await registerUser(req, res);
      
      const data = res._getJSONData();
      console.log('Register response:', data); // Debug log
      
      expect(res.statusCode).toBe(200);
      expect(data.success).toBe(true);
      expect(data.token).toBe('mocked-token');
    });
  });

  describe('adminLogin', () => {
    it('should login as admin with correct credentials', async () => {
      // Set environment variables
      process.env.ADMIN_EMAIL = 'admin@example.com';
      process.env.ADMIN_PASSWORD = 'adminpass';
      process.env.JWT_SECRET = 'secret';

      const req = httpMocks.createRequest({
        method: 'POST',
        body: {
          email: 'admin@example.com',
          password: 'adminpass',
        },
      });
      const res = httpMocks.createResponse();

      // Mock JWT token generation
      jwt.sign.mockReturnValue('admin-token');

      await adminLogin(req, res);
      
      const data = res._getJSONData();
      console.log('Admin login response:', data); // Debug log
      
      expect(res.statusCode).toBe(200);
      expect(data.success).toBe(true);
      expect(data.token).toBe('admin-token');
    });
  });
});