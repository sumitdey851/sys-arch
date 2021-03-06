import { Switch, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Layout from "./components/Layout/Layout";
// import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
// import HomePage from "./pages/HomePage";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const UserProfile = React.lazy(() =>
  import("./components/Profile/UserProfile")
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
          <Route path="/profile">
            <UserProfile />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
