import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { PATH_DASHBOARD, PATH_DASHBOARD_CLASS_LIST, PATH_DASHBOARD_STUDENT_LIST, PATH_DASHBOARD_TEACHER_LIST, PATH_DASHBOARD_VIEW_PROFILE, PATH_HOME, PATH_LOGIN } from './services/common';
import ViewMyProfilePage from './pages/dashboard/ViewMyProfilePage';
import ClassListPage from './pages/dashboard/ClassListPage';
import TeacherListPage from './pages/dashboard/TeacherListPage';
import StudentListPage from './pages/dashboard/StudentListPage';

function App() {
    return (
        <>
            <Routes>
                <Route path={PATH_HOME} element={<HomePage />} />
                <Route path={PATH_LOGIN} element={<LoginPage />} />
                <Route path={PATH_DASHBOARD} element={<ViewMyProfilePage />} />
                <Route path={PATH_DASHBOARD_VIEW_PROFILE} element={<ViewMyProfilePage />} />
                <Route path={PATH_DASHBOARD_CLASS_LIST} element={<ClassListPage />} />
                <Route path={PATH_DASHBOARD_TEACHER_LIST} element={<TeacherListPage />} />
                <Route path={PATH_DASHBOARD_STUDENT_LIST} element={<StudentListPage />} />
            </Routes>
        </>
    );
}

export default App;
