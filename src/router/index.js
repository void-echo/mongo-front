import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "@/App.vue";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: App
    },
    {
        path: '/place-holder',
        name: 'place-holder',
        component: () => import('../components/place-holder.vue')
    },
    // LAB 2
    {
        path: '/lab-2-1--all-student-le-20-age',
        name: 'lab-2-1--all-student-le-20-age',
        component: () => import('../components/lab2/lab-2-1--all-student-le-20-age.vue')
    },
    {
        path: '/lab-2-2--all-student-le-20-age-and-software',
        name: 'lab-2-2--all-student-le-20-age-and-software',
        component: () => import('../components/lab2/lab-2-2--all-student-le-20-age-and-software.vue')
    },
    {
        path: '/lab-2-3--all-student',
        name: 'lab-2-3--all-student',
        component: () => import('../components/lab2/lab-2-3--all-student.vue')
    },
    {
        path: '/lab-2-4--get-all-student-names-and-ages',
        name: 'lab-2-4--get-all-student-names-and-ages',
        component: () => import('../components/lab2/lab-2-4--get-all-student-names-and-ages.vue')
    },
    {
        path: '/lab-2-5--get-all-student-names-and-sexes',
        name: 'lab-2-5--get-all-student-names-and-sexes',
        component: () => import('../components/lab2/lab-2-5--get-all-student-names-and-sexes.vue')
    },
    {
        path: '/lab-2-6--all-courses',
        name: 'lab-2-6--all-courses',
        component: () => import('../components/lab2/lab-2-6--all-courses.vue')
    },
    {
        path: '/lab-2-7--find-one-course-name',
        name: 'lab-2-7--find-one-course-name',
        component: () => import('../components/lab2/lab-2-7--find-one-course-name.vue')
    },
    {
        path: '/lab-2-8--find-male-teacher-older-than',
        name: 'lab-2-8--find-male-teacher-older-than',
        component: () => import('../components/lab2/lab-2-8--find-male-teacher-older-than.vue')
    },
    {
        path: '/lab-2-9--all-male-teachers',
        name: 'lab-2-9--all-male-teachers',
        component: () => import('../components/lab2/lab-2-9--all-male-teachers.vue')
    },
    {
        path: '/lab-2-10--all-cs-department-t',
        name: 'lab-2-10--all-cs-department-t',
        component: () => import('../components/lab2/lab-2-10--all-cs-department-t.vue')
    },
    // LAB 3
]

const router = new VueRouter({
    routes
})

export default router
