import axios, { AxiosResponse } from 'axios';

import getTargetUrls from './getTargetUrls';

export default async function findTargets(sourceUrl: string): Promise<string[]> {
    const response: AxiosResponse<string> = await axios.get(sourceUrl);
    try {
        const pageContent = response.data;
        return await getTargetUrls(pageContent, sourceUrl);
    } catch (error) {
        console.log('Error finding target urls:', error.message);
        return [];
    }
}
