import { createWebHistory, createRouter } from "vue-router"
import RegisterUser from '../pages/RegisterUser'
import EditUser from '../pages/EditUser'
import UsersList from '../pages/UsersList'

const routes = [
    {
        path: '/',
        name: 'UsersList',
        component: UsersList
    },
    {
        path: '/register',
        name: 'RegisterUser',
        component: RegisterUser
    },
    {
        path: '/edit',
        name: 'EditUser',
        component: EditUser 
    }

]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router