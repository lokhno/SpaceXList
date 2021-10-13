
import axios from "axios";

export const launchesApi = {
    getLaunches: async () => {
        const response = await axios.get("https://api.spacexdata.com/v4/launches");
        return response.data;
    }
}

