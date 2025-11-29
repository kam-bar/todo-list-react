import { Routes, Route, Navigate } from "react-router-dom";
import Container from "./common/Container";
import Header from "./common/Header";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage";
import TaskPage from "./features/tasks/TaskPage";
import { ROUTES } from "./routes";
import Navigation from "./common/Navigation";

function App() {
    return (
        <Container>
            <Navigation />
            <Header title="Lista zadań" />
            <Routes>
                <Route path={ROUTES.tasks} element={<TasksPage />} />
                <Route path={ROUTES.author} element={<AuthorPage />} />
                <Route path={ROUTES.task()} element={<TaskPage />} />
                <Route
                    path="*"
                    element={<Navigate to={ROUTES.tasks} replace />}
                />
            </Routes>
        </Container>
    );
}

export default App;
