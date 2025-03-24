// API 服务封装
const API_URL = 'https://api.example.com'; // 替换为实际的 API 地址

interface Plan {
  id?: number;
  title: string;
  date: string;
  description: string;
}

interface ChatResponse {
  message: string;
  suggestions?: string[];
}

// 获取旅行计划列表
export const getPlans = async (): Promise<Plan[]> => {
  try {
    const response = await fetch(`${API_URL}/plans`);
    if (!response.ok) {
      throw new Error('获取旅行计划失败');
    }
    return await response.json();
  } catch (error) {
    console.error('API 错误:', error);
    throw error;
  }
};

// 获取单个旅行计划详情
export const getPlanById = async (planId: number): Promise<Plan> => {
  try {
    const response = await fetch(`${API_URL}/plans/${planId}`);
    if (!response.ok) {
      throw new Error('获取旅行计划详情失败');
    }
    return await response.json();
  } catch (error) {
    console.error('API 错误:', error);
    throw error;
  }
};

// 创建新的旅行计划
export const createPlan = async (planData: Omit<Plan, 'id'>): Promise<Plan> => {
  try {
    const response = await fetch(`${API_URL}/plans`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(planData),
    });
    if (!response.ok) {
      throw new Error('创建旅行计划失败');
    }
    return await response.json();
  } catch (error) {
    console.error('API 错误:', error);
    throw error;
  }
};

// 更新旅行计划
export const updatePlan = async (planId: number, planData: Partial<Plan>): Promise<Plan> => {
  try {
    const response = await fetch(`${API_URL}/plans/${planId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(planData),
    });
    if (!response.ok) {
      throw new Error('更新旅行计划失败');
    }
    return await response.json();
  } catch (error) {
    console.error('API 错误:', error);
    throw error;
  }
};

// 删除旅行计划
export const deletePlan = async (planId: number): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/plans/${planId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('删除旅行计划失败');
    }
    return true;
  } catch (error) {
    console.error('API 错误:', error);
    throw error;
  }
};

// 发送聊天消息到 AI
export const sendChatMessage = async (message: string): Promise<ChatResponse> => {
  try {
    const response = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) {
      throw new Error('发送消息失败');
    }
    return await response.json();
  } catch (error) {
    console.error('API 错误:', error);
    throw error;
  }
};