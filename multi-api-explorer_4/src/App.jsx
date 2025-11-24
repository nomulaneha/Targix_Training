import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoaderSkeleton from "./components/LoaderSkeleton";

const UsersPage = lazy(() => import("./pages/UsersPage"));
const NasaPage = lazy(() => import("./pages/NasaPage"));
const CryptoPage = lazy(() => import("./pages/CryptoPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="page-container">
        <Suspense fallback={<LoaderSkeleton />}>
          <Routes>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/nasa" element={<NasaPage />} />
            <Route path="/crypto" element={<CryptoPage />} />
            <Route path="/" element={<Navigate to="/users" replace />} />
            <Route path="*" element={<div>404 — Page not found</div>} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}
