import qs from 'qs';
import axios from 'axios';

export default async function sendWebmention(source: string, target: string, endpointUrl: string): Promise<any> {
    const data = { source, target };
    return axios({
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: endpointUrl,
    });
}
