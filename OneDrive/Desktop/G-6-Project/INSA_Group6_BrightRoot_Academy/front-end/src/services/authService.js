// authService.js
import api from "./api";

export const registerUser = async (userData) => {
  try {
    const response = await api.post("users/register/", userData);

    // Debug: Check what the backend actually returns
    console.log("🔐 Registration response:", response.data);

    // Store tokens with multiple keys for compatibility
    if (response.data.access) {
      localStorage.setItem("brightroot_token", response.data.access); // Backup key
      localStorage.setItem("access", response.data.access);
    }
    if (response.data.refresh) {
      localStorage.setItem("refresh", response.data.refresh);
    }

    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
    };
  }
};

// Add login function if you don't have one
export const loginUser = async (credentials) => {
  try {
    const response = await api.post("users/login/", credentials); // Adjust endpoint as needed
    
    console.log("🔐 Login response:", response.data);

    if (response.data.access) {
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("brightroot_token", response.data.access); // Backup key
      console.log("✅ Token stored in localStorage");
    }

    return { success: true, data: response.data };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Login failed",
    };
  }
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = localStorage.getItem("access") || localStorage.getItem("brightroot_token");
  return !!token;
};

// Get the token
export const getToken = () => {
  return localStorage.getItem("access") || localStorage.getItem("brightroot_token");
};