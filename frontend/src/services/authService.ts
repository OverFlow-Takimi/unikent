import api from "@/lib/api";
import { RegisterDto } from "@/types/backend";

export const authService = {
    register: async (data: RegisterDto) => {
        try {
            console.log("Registering with data:", data);
            const response = await api.post("/Auth/register", data);
            return response.data;
        } catch (error: any) {
            console.error("Registration Error Details:", error.response?.data);
            throw error;
        }
    },
};
