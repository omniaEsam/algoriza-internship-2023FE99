import { defineStore } from 'pinia';
import router from '../router';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    token: null,
  }),
  actions: {
    login(email, password) {
      const user = { email, password, role: 'user' };
      const secretKey = 'super_secret_key';
      const token = this.encodeJWT(user, secretKey);

      this.token = token;
      this.isAuthenticated = true;
      localStorage.setItem('token', token);

     
      router.push('/');
    },
    encodeJWT(payload, secret) {
      const header = { alg: 'HS256', typ: 'JWT' };
      const encodedHeader = btoa(JSON.stringify(header));
      const encodedPayload = btoa(JSON.stringify(payload));
      const signature = btoa(
        new TextEncoder().encode(`${encodedHeader}.${encodedPayload}.${secret}`).toString('base64')
      );
      return `${encodedHeader}.${encodedPayload}.${signature}`;
    },
    decodeJWT(token, secret) {
      const [encodedHeader, encodedPayload, signature] = token.split('.');
      const expectedSignature = btoa(
        new TextEncoder().encode(`${encodedHeader}.${encodedPayload}.${secret}`).toString('base64')
      );

      if (signature !== expectedSignature) {
        throw new Error('Invalid signature');
      }

      const decodedHeader = JSON.parse(atob(encodedHeader));
      const decodedPayload = JSON.parse(atob(encodedPayload));

      return { header: decodedHeader, payload: decodedPayload };
    },
  },
});