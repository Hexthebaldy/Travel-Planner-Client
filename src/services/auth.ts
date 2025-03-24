// 认证服务封装
const API_URL = 'https://api.example.com'; // 替换为实际的 API 地址

interface User {
  id: number;
  name: string;
  email: string;
  preferences?: {
    preferredDestinations?: string[];
    travelStyle?: string;
    budget?: string;
  };
}

interface AuthResponse {
  token: string;
  user: User;
}

// 用户登录
export const login = async (email: string, password: string): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      throw new Error('登录失败');
    }
    
    const data: AuthResponse = await response.json();
    // 保存 token 到本地存储
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    return data.user;
  } catch (error) {
    console.error('认证错误:', error);
    throw error;
  }
};

// 用户注册
export const register = async (name: string, email: string, password: string): Promise<User> => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    
    if (!response.ok) {
      throw new Error('注册失败');
    }
    
    return await response.json();
  } catch (error) {
    console.error('认证错误:', error);
    throw error;
  }
};

// 用户登出
export const logout = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// 获取当前用户
export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('user');
  if (!userStr) return null;
  return JSON.parse(userStr);
};

// 检查用户是否已登录
export const isAuthenticated = (): boolean => {
  return localStorage.getItem('token') !== null;
};

// 获取认证 token
export const getToken = (): string | null => {
  return localStorage.getItem('token');
};

// 更新用户资料
export const updateUserProfile = async (userData: Partial<User>): Promise<User> => {
  try {
    const token = getToken();
    if (!token) {
      throw new Error('未登录');
    }
    
    const response = await fetch(`${API_URL}/users/profile`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error('更新资料失败');
    }
    
    const updatedUser = await response.json();
    localStorage.setItem('user', JSON.stringify(updatedUser));
    
    return updatedUser;
  } catch (error) {
    console.error('认证错误:', error);
    throw error;
  }
};