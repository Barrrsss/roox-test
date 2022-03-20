export const USERS_URL = "https://jsonplaceholder.typicode.com/users";

class MainApi {
    private baseUrl: any;
    constructor({options}: {options: any}) {
        this.baseUrl = options.baseUrl;
    }

    _getResponseData({res}: {res: any}) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error(`Ошибка: ${res.status}`));
    }
    getUsers() {
        return fetch(`${this.baseUrl}`,).then((res) => this._getResponseData({res: res}));
    }

}

const mainApi = new MainApi({
    options: {
        baseUrl: USERS_URL
    }
});

export default mainApi;
