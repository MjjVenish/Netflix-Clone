import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import PageWrapper from "../container/PageWrapper";
import SuspenseWrapper from "../container/SuspenseWrapper";
const RootPage = lazy(() => import("../Pages/RootPage"));
const LoginPage = lazy(() => import("../Pages/LoginPage"));
const HomePage = lazy(() => import("../Pages/HomePage"));
const SinglePage = lazy(() => import("../Pages/SinglePage"));
const MyCart = lazy(() => import("../Pages/MyCart"));
const RecentAdded = lazy(() => import("../Pages/RecentAddedPage"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <SuspenseWrapper>
            <RootPage />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/login"
        element={
          <SuspenseWrapper>
            <LoginPage />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/browse"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <HomePage />
            </PageWrapper>
          </SuspenseWrapper>
        }
      />
      <Route
        path="/browse/:id"
        element={
          <SuspenseWrapper>
            <SinglePage />
          </SuspenseWrapper>
        }
      />
      <Route
        path="/recently added"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <RecentAdded />
            </PageWrapper>
          </SuspenseWrapper>
        }
      />
      <Route
        path="/mylist"
        element={
          <SuspenseWrapper>
            <PageWrapper>
              <MyCart />
            </PageWrapper>
          </SuspenseWrapper>
        }
      />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};
export default AppRoutes;
