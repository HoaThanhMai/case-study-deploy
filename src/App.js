import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { path_dashboard, path_dashboard_class_list, path_dashboard_teacher_list, path_dashboard_view_profile, path_home, path_login } from './services/common';
import DashBoardPage from './pages/dashboard/DashBoardPage';
import ViewProfilePage from './pages/dashboard/ViewProfilePage';
import ClassListPage from './pages/dashboard/ClassListPage';
import TeacherListPage from './pages/dashboard/TeacherListPage';

function App() {
    return (
        <>
            <Routes>
                <Route path={path_home} element={<HomePage />} />
                <Route path={path_login} element={<LoginPage />} />
                <Route path={path_dashboard} element={<DashBoardPage />} />
                <Route path={path_dashboard_view_profile} element={<ViewProfilePage />} />
                <Route path={path_dashboard_class_list} element={<ClassListPage />} />
                <Route path={path_dashboard_teacher_list} element={<TeacherListPage />} />
            </Routes>
        </>
    );
}

export default App;
