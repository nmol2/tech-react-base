import { RouteObject } from "react-router-dom";
import LoginPage from "../core/auth/pages/LoginPage";
import ErrorPage from "../features/common/pages/ErrorPage";
import LandingPage from "../features/common/pages/LandingPage";

export const appRoutes: RouteObject[] = [
    {
        path: "/",
        element: <LandingPage/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/register",
        element: <div>Register</div>,
    },
    {
        path: "/forgot-password",
        element: <div>Forgot Password</div>,
    },
    {
        path: "/reset-password",
        element: <div>Reset Password</div>,
    },
    {
        path: "/dashboard",
        element: <div>Dashboard</div>,
    },
    {
        path: "/profile",
        element: <div>Profile</div>,
    },
    {
        path: "/settings",
        element: <div>Settings</div>,
    },
    {
        path: "/404",
        element: <div>404 Not Found</div>,
    },
    {
        path: "*",
        element: <ErrorPage/>,
    },
];