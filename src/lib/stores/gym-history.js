import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const initial = browser
  ? JSON.parse(localStorage.getItem('gymHistory') || '[]')
  : [];

export const gymHistory = writable(initial);

if (browser) {
  gymHistory.subscribe((value) => {
    localStorage.setItem('gymHistory', JSON.stringify(value));
  });
}
