import {api, requestConfig} from '../utils/config'

// Register a user
const register = async (data) => {
    const config = requestConfig("POST", data);
  
    try {
      const res = await fetch(api + "/users/register", config)
        .then((res) => {
          if (!res.ok) {
            // Se a resposta não for bem-sucedida (status HTTP >= 400), lança um erro
            throw new Error(`API responded with status ${res.status}`);
          }
          return res.json();
        });
  
      // Apenas armazena no localStorage se res existir e contiver os dados necessários
      if (res && res.user) {
        localStorage.setItem("user", JSON.stringify(res));
      }
  
      return res;
    } catch (error) {
      console.error("Error during registration:", error.message);
      return null; // Retorna null em caso de erro
    }
  };
  

// Logout an user
const logout = () => {
    localStorage.removeItem('user')
}


// Sign in a user
const login = async (data) => {
    const config = requestConfig("POST", data);
  
    try {
      const res = await fetch(api + "/users/login", config)
        .then((res) => {
          if (!res.ok) {
            // Se a resposta não for bem-sucedida (status HTTP >= 400), lança um erro
            throw new Error(`API responded with status ${res.status}`);
          }
          return res.json();
        });
  
      // Apenas armazena no localStorage se res existir e contiver os dados necessários
      if (res && res._id) {
        localStorage.setItem("user", JSON.stringify(res));
      }
  
      return res;
    } catch (error) {
      console.error("Error during login:", error.message);
      return null; // Retorna null em caso de erro
    }
  };
  

const authService = {
    register,
    logout,
    login
}

export default authService