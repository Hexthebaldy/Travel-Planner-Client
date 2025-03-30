// API 服务封装
// 不再需要完整URL，使用相对路径
const API_URL = ''; 

interface Plan {
  id?: number;
  title: string;
  date: string;
  description: string;
}

interface ChatResponse {
  success: boolean; // 修正拼写错误
  data: any;
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
    // 临时使用完整URL直接访问后端
    const response = await fetch(`http://localhost:3000/api/agent/response`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 添加CORS相关头
        'Accept': 'application/json'
      },
      body: JSON.stringify({ message }),
    });
    
    // if (!response.ok) {
    //   console.log('响应状态:', response.status);
    //   throw new Error(`发送消息失败: ${response.status}`);
    // }
    console.log('response: ', response);

    return await response.json();
  } catch (error) {
    console.error('API 错误:', error);
    // 返回模拟数据，避免应用崩溃
    return {
      success: true,
      data: `暂时无法连接到服务器，这是一个模拟回复。您发送的消息是: "${message}"`
    };
  }
};
