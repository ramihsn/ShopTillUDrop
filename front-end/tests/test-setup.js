import { vi } from 'vitest';
import { config } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '../src/router';

// Mock window.alert
global.alert = vi.fn();

// Setup Vue Router for testing
const router = createRouter({
  history: createWebHistory(),
  routes, // This should be an array of routes
});

config.global.plugins = [router];
