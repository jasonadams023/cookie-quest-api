const createCookie = (name, data) => {
    return `${name}=${JSON.stringify(data)}`;
}

const parseCookie = (cookie) => {
    const data = cookie.split('=')[1];
    return JSON.parse(data);
};

module.exports = {createCookie, parseCookie};