import { LocalStorage } from '../types';

const localStorage = (): LocalStorage => ({
  keys: {},

  clear(): void {
    this.keys = {};
  },

  getItem(key: string): string {
    return this.keys[key];
  },

  setItem(key: string, value: string): void {
    this.keys[key] = value;
  },
});

export default localStorage;
