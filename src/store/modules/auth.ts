import axios from 'axios';
const TOKEN_KEY: string = 'jwt-token';
const API_KEY: string = 'AIzaSyDkK8cTxvSAzvqSY7xdpEFMmvK7hvIHgdA';

type st = {
    commit: any,
    dispatch: any
}

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOKEN_KEY)
        }
    },
    getters: {
        token(state: any) {
            return state.token
        },
        isAuthenticated(_: any, getters: any) {
            return !!getters.token
        }
    },
    mutations: {
        setToken(state: any, token: any) {
            state.token = token;
            localStorage.setItem(TOKEN_KEY, token);
        },
        logout(state: any) {
            state.token = null;
            localStorage.removeItem(TOKEN_KEY);
        }
    },
    actions: {
        async login({ commit, dispatch }: st, payload: any) {
            try {
                const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
                const { data } = await axios.post(url, {...payload, returnSecureToken: true});
                console.log(data);
                
                commit('setToken', data.idToken);
            } catch (e) {
                console.log(e);
            }
        }
    }
}