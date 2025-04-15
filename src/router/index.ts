import { createRouter } from 'vue-router';
import routes from './routes';

const router = createRouter({
  history: import.meta.env.VITE_BASE_URL,
  routes,
  scrollBehavior: (_to, _from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

router.beforeEach(async (_to, _from, next) => {
  next();
});

router.afterEach(() => {});

export default router;
