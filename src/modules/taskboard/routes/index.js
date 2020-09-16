
import TaskboardTemplate from '../templates/Taskboard.vue';
import Home from '../pages/Home.vue';

import TasksRoot from '../pages/TasksRoot.vue';
import Tasks from '../pages/Tasks.vue';

export default [
  {
    path: '/taskboard',
    name: 'Taskboard',
    component: TaskboardTemplate,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: 'tasks',
        component: TasksRoot,
        children: [
          {
            path: '/',
            component: Tasks
          }
        ]
      }

      // {
      //   path: '*',
      //   redirect: '/taskboard'
      // }
    ]
  }
];
