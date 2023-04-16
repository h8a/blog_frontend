import type { RouteRecordRaw } from 'vue-router'
import PostsLayout from '@/modules/administrators/posts/layouts/PostsLayout.vue'
import PostCreateView from '@/modules/administrators/posts/views/PostCreateView.vue'
import AuthView from '@/modules/administrators/auth/views/AuthView.vue'
import UsersView from '@/modules/administrators/users/views/UsersView.vue'
import UserView from '@/modules/administrators/users/views/UserView.vue'
import AuthUserAdminView from '../auth/views/AuthUserAdminView.vue'

const administrationRoute: RouteRecordRaw = {
    path: '/admin',
    component: PostsLayout,
    redirect: '/admin/posts',
    children: [
        {
            path: '/admin/posts',
            name: 'posts',
            component: PostCreateView,
            meta: { requireAuth: true }
        },
        {
            path: '/admin/auth',
            name: 'auth',
            component: AuthView
        },
        {
            path: '/admin/auth-user',
            name: 'auth',
            component: AuthUserAdminView
        },
        {
            path: '/admin/users',
            name: 'users',
            component: UsersView,
            meta: { requireAuth: true }
        },
        {
            path: '/admin/user/:id',
            name: 'user',
            component: UserView,
            meta: { requireAuth: true }
        }
    ]
}

export default administrationRoute