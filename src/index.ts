import * as restana from 'restana';
import * as connectQuery from 'connect-query';
import * as bodyParser from 'body-parser';
import { port } from './production.site.config';
import { handlers } from './handlers';

const service = restana();

service.use(connectQuery());
service.use(bodyParser.json());
service.use(bodyParser.urlencoded({ extended: true }));

service.all('/api/:method', async(request, response) => {
    const { params, query, body } = request;
    const { method } = params;

    const apiParams = { ...query, ...body };
    if (method in handlers) {
        response.send({ result: await handlers[method](apiParams) });
    } else {
        response.send({ error: 'unknown method' });
    }
});

service.start(port).then(server => {
    process.stdout.write('Server started\n');
});
