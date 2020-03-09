import { handlers } from '.';

handlers['time'] = async(params) => {
    let result = Date.now();

    if ('seconds' in params) {
        result = ~~(result / 1000);
    }

    return result;
};
