export interface PerformanceMetric {
    value: number;
    month: string;
    productivity: number;
    goalsCompleted: number;
    feedbackScore: number;
    punctuality: number;
    keyAchievements: string[];

  }
  
  export interface Employee {
    id: string;
    name: string;
    email: string;
    role: string;
    department: string;
    joinDate: string;
    managerID: string;
    avatarUrl: string;
    performance: PerformanceMetric[];
    lastPromotionDate: string;
    location: string;
    isActive: boolean;
  }