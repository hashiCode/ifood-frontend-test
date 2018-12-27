class LocalStorageService{
    
    constructor(){
        this.tokenKey="auth_token"
    }

    storeToken(token){
        localStorage.setItem(this.tokenKey, token);
    }

    getToken(){
        return localStorage.getItem(this.tokenKey);
    }

    removeToken(){
        localStorage.removeItem(this.tokenKey);
    }

}

const localStorageService = new LocalStorageService();

export default localStorageService;