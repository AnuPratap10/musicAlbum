import React from "react";
import {Route, Routes} from "react-router-dom";
import {Watch} from "../Pages/Watch";
import {SingleWatchRecord} from "../Pages/SingleWatchRecord";
import {EditWatchRecord} from "../Pages/EditWatchRecord";
import {Login} from "../Pages/Login";
import { Home } from "../Pages/Home";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<SingleWatchRecord />} />
        <Route path="/watch/id/edit" element={<EditWatchRecord />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
      
    </>
  );
};
