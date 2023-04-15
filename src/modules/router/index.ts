import type { RouteRecordRaw } from "vue-router";
import HomeLayout from "@/modules/shared/home/layouts/HomeLayout.vue";
import PostsView from "@/modules/posts/views/PostsView.vue";


const homeRoute: RouteRecordRaw = {
    path: '/',
    component: HomeLayout,
    redirect: '/posts',
    children: [
        {
            path: '/posts',
            name: 'home',
            component: PostsView
        }
    ]
}

export default homeRoute;