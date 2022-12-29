import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'place-holder',
        component: () => import('../components/place-holder.vue')
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
    {
        path: '/insert-course',
        name: 'insert-course',
        component: () => import('../components/lab3/insert-course.vue')
    },
    {
        path: '/insert-student',
        name: 'insert-student',
        component: () => import('../components/lab3/insert-student.vue')
    },
    {
        path: '/insert-teacher',
        name: 'insert-teacher',
        component: () => import('../components/lab3/insert-teacher.vue')
    },
    // LAB 4
    {
        path: '/update-course',
        name: 'update-course',
        component: () => import('../components/lab4/update-course.vue')
    },
    {
        path: '/update-student',
        name: 'update-student',
        component: () => import('../components/lab4/update-student.vue')
    },
    {
        path: '/update-teacher',
        name: 'update-teacher',
        component: () => import('../components/lab4/update-teacher.vue')
    },
    // LAB 5
    {
        path: '/course-select',
        name: 'course-select',
        component: () => import('../components/lab5/course-select.vue')
    },
    // LAB 6
    {
        path: '/lab-6-1--distinct-course-names-in-sc',
        name: 'lab-6-1--distinct-course-names-in-sc',
        component: () => import('../components/lab6/lab-6-1--distinct-course-names-in-sc.vue')
    },
    {
        path: '/lab-6-2--gpa-best-10-students',
        name: 'lab-6-2--gpa-best-10-students',
        component: () => import('../components/lab6/lab-6-2--gpa-best-10-students.vue')
    },
    {
        path: '/lab-6-3--most-hardworking-students-top10',
        name: 'lab-6-3--most-hardworking-students-top10',
        component: () => import('../components/lab6/lab-6-3--most-hardworking-students-top10.vue')
    },
    {
        path: '/lab-6-4--best-score-and-c-of-each-s',
        name: 'lab-6-4--best-score-and-c-of-each-s',
        component: () => import('../components/lab6/lab-6-4--best-score-and-c-of-each-s.vue')
    },
    {
        path: '/lab-6-5--gpa-rank-level-overview-of-each-s',
        name: 'lab-6-5--gpa-rank-level-overview-of-each-s',
        component: () => import('../components/lab6/lab-6-5--gpa-rank-level-overview-of-each-s.vue')
    },
    {
        path: '/lab-6-6--avg-gpa-and-sel-s-num-of-c',
        name: 'lab-6-6--avg-gpa-and-sel-s-num-of-c',
        component: () => import('../components/lab6/lab-6-6--avg-gpa-and-sel-s-num-of-c.vue')
    },
    {
        path: '/lab-6-7--best-student-of-each-c',
        name: 'lab-6-7--best-student-of-each-c',
        component: () => import('../components/lab6/lab-6-7--best-student-of-each-c.vue')
    },
    {
        path: '/lab-6-8--best-c-top-10',
        name: 'lab-6-8--best-c-top-10',
        component: () => import('../components/lab6/lab-6-8--best-c-top-10.vue')
    },
    {
        path: '/lab-6-9--popular-c-top-10',
        name: 'lab-6-9--popular-c-top-10',
        component: () => import('../components/lab6/lab-6-9--popular-c-top-10.vue')
    },


]

const router = new VueRouter({
    routes
})

export default router
