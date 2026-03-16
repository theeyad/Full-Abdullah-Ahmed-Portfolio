import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string | null;
  sourceUrl: string;
  imageUrl: string;
  category: string;
  badge: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  badgeType: string;
  link: string | null;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const fetchProjects = async (category?: string): Promise<Project[]> => {
  const params = category && category !== "All" ? { category } : {};
  const { data } = await api.get("/projects", { params });
  return data.data;
};

export const fetchProjectById = async (id: string): Promise<Project> => {
  const { data } = await api.get(`/projects/${id}`);
  return data.data;
};

export const fetchAchievements = async (category?: string): Promise<Achievement[]> => {
  const params = category && category !== "All" ? { category } : {};
  const { data } = await api.get("/achievements", { params });
  return data.data;
};

export const sendContactMessage = async (payload: ContactPayload) => {
  const { data } = await api.post("/contact", payload);
  return data;
};
