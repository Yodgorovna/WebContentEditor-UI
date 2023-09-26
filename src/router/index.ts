import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import TipTapView from "@/views/TipTapView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },

        {
            path: "/tiptap",
            name: "tiptap",
            component: TipTapView,
        },


    ],
});

export default router;
