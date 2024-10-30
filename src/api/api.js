import axios from 'axios';

const BASE_URL = 'https://api.carbonintensity.org.uk';

export const fetchCarbonIntensityByRegion = async (regionId) => {
    try {
        const response = await axios.get(`${BASE_URL}/regional/regionid/${regionId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching carbon intensity data:', error);
        throw error;
    }
};
