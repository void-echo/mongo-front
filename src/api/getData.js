import fetch from '../api/fetch'


export const insertStudent = request => fetch('/student/insert-many', request,'POST');
export const insertTeacher = request => fetch('/teacher/insert-many', request,'POST');
export const insertCourse = request => fetch('/course/insert-many', request,'POST');

export const updateStudent = request => fetch('/student/update', request,'POST');
export const updateTeacher = request => fetch('/teacher/update', request,'POST');
export const updateCourse = request => fetch('/course/update', request,'POST');

export const courseselection1 = data => fetch('/courseselection/getbysid', data,'GET');
export const courseselection2 = data => fetch('/courseselection/getoptionalcourse', data,'GET');
export const updateStudentCourse = data => fetch('/courseselection/update', data,'POST');
export const insertStudentCourse = request => fetch('/courseselection/insert', request,'POST');
