import { setTransitionHooks } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TasksView from '../views/TasksView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import FormView from '../views/Projects/FormView.vue';
import ListView from '../views/Projects/ListView.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tasks',
    component: TasksView,
  },
  {
    path: '/projects',
    component: ProjectsView,
    children: [
      {
        path: '',
        name: 'Projects',
        component: ListView,
      },
      {
        path: 'new',
        name: 'New project',
        component: FormView,
      },
      {
        path: ':id',
        name: 'Edit task',
        component: FormView,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
