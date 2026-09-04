import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./styels/reset.scss"
import Dashboard from "./pages/dashboard/Dashboard"
import AuthPage from "./pages/public/AuthPage"
import Landing from "./pages/public/Landing"
import Finances from "./pages/dashboard/Finances"
import Tasks from "./pages/dashboard/Tasks"
import Projects from "./pages/dashboard/Projects"
import Clients from "./pages/dashboard/Clients"
import Settings from "./pages/system/Settings"
import AllContexts from "./kontexts/AllContexts"

const WorkNest = () => {
    return (

        <AllContexts >

            <HelmetProvider>

                <BrowserRouter>

                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/clients" element={<Clients />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/finance" element={<Finances />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/settings" element={<Settings />} />

                        <Route path="/auth" element={<AuthPage />} />

                        <Route path="/" element={<Landing />} />
                        <Route path="*" element={<h1>404 — Страница не найдена</h1>} />
                    </Routes>

                </BrowserRouter>

            </HelmetProvider>
        </AllContexts>
    )
}

export default WorkNest