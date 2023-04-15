import type { RouteRecordRaw } from 'vue-router'
import PostsLayout from '@/modules/administrators/posts/layouts/PostsLayout.vue'
import PostCreateView from '@/modules/administrators/posts/views/PostCreateView.vue'
import AuthView from '@/modules/administrators/auth/views/AuthView.vue'

const administrationRoute: RouteRecordRaw = {
    path: '/admin',
    component: PostsLayout,
    redirect: '/admin/posts',
    children: [
        {
            path: '/admin/posts',
            name: 'posts',
            component: PostCreateView
        },
        {
            path: '/admin/auth',
            name: 'auth',
            component: AuthView
        }
    ]
}

export default administrationRoute