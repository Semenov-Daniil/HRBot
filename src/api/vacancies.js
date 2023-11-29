import { request } from "undici";
import { getConfig } from "../config.js";
import querystring from "node:querystring";

// http://opendata.trudvsem.ru/api/v1/vacancies/region/%regionCode%
const config = getConfig();

export const getVacancies = async (params = {}) => {
    const q = querystring.stringify({limit: 10, ...params})
    const url = `${config.api_url}/vacancies?${q}`
    console.log(url);

    const { body } = await request(url);
    const { results } = await body.json();

    return results;
};

export const getVacanciesByRegion = async (regionCode, params = {}) => {
    const q = querystring.stringify({limit: 10, ...params})
    const url = `${config.api_url}/vacancies/region/${regionCode}?${q}`
    console.log(url);

    const { body } = await request(url);
    const { results } = await body.json();

    return results;
};