import express from 'express';
import bodyParser from 'body-parser';

import processGitHubCommit from './processGitHubCommit';
import { RequestBody } from './types';

const { BRANCH_NAME } = process.env;

const app = express();

app.use(bodyParser.json());

app.post('/main', (request, response) => {
    console.log('Request received');
    try {
        const payload = request.body as RequestBody;

        if (payload && payload.ref === `refs/heads/${BRANCH_NAME || 'master'}`) {
            if (payload.commits && Array.isArray(payload.commits)) {
                payload.commits.map(processGitHubCommit);
            }
        }
        response.status(202).send({
            success: true,
        });
    } catch (err) {
        response.status(500).send({
            success: false,
        });
    }
});

app.listen(process.env.PORT || 3000);
