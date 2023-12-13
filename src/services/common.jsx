// Path to each Pages
const PATH_HOME = "/";
const PATH_LOGIN = "/login";
const PATH_DASHBOARD = "/dashboard";
const PATH_DASHBOARD_VIEW_PROFILE = "/dashboard/my-profile";
const PATH_DASHBOARD_CLASS_LIST = "/dashboard/class-list";
const PATH_DASHBOARD_TEACHER_LIST = "/dashboard/teacher-list";
const PATH_DASHBOARD_STUDENT_LIST = "/dashboard/student-list";

// API url prefix
const URL_API_GET_ADMIN =
    "https://json-server-api-rj2309r1.vercel.app/member?role=admin";
const URL_API_GET_MEMBER = "https://json-server-api-rj2309r1.vercel.app/member";
const URL_API_GET_TEACHER =
    "https://json-server-api-rj2309r1.vercel.app/member?role=teacher";
const URL_API_GET_STUDENT =
    "https://json-server-api-rj2309r1.vercel.app/member?role=student";
const URL_API_GET_CLASS = "https://json-server-api-rj2309r1.vercel.app/class";
const URL_API_GET_CLASS_MEMBER =
    "https://json-server-api-rj2309r1.vercel.app/class_member";

export {
    PATH_HOME,
    PATH_LOGIN,
    PATH_DASHBOARD,
    PATH_DASHBOARD_VIEW_PROFILE,
    PATH_DASHBOARD_CLASS_LIST,
    PATH_DASHBOARD_TEACHER_LIST,
    PATH_DASHBOARD_STUDENT_LIST,
    URL_API_GET_ADMIN,
    URL_API_GET_MEMBER,
    URL_API_GET_TEACHER,
    URL_API_GET_STUDENT,
    URL_API_GET_CLASS,
    URL_API_GET_CLASS_MEMBER,
};
