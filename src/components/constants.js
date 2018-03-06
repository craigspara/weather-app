

const corsProxy ='https://cors-anywhere.herokuapp.com/';
const apiKey = '5d18290a136c96ae38db68e9bf75ae5e';
const baseUrl = 'https://api.darksky.net/forecast';
const longitude = '-71.549484';
const latitude = '43.203377';
const units = '?units=us';

export const URL = `${corsProxy}${baseUrl}/${apiKey}/${latitude},${longitude}/${units}`;

export const IMG_URL_MOON = process.env.PUBLIC_URL + '/images/moon-phases';