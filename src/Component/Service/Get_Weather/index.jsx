import axios from "axios";
import { Base1 } from "../../Config";

// Update service to fetch by city name
export const Get_Weather = async (city) => {
  try {
    const response = await axios.get(Base1, {
      params: {
        q: city, // Use 'q' for city name
        appid: import.meta.env.VITE_API_KEY, // Access API key from .env
        units: "metric", // Optional: returns temperatures in Celsius
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data || [];
  } catch (e) {
    console.log("API Error:", e);
    throw new Error("Weather data not found.");
  }
};
