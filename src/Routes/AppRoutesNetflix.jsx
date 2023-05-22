import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../NetflixPages/HomePage";
import LoginNetflix from "../NetflixPages/LoginPage";
import BrowseNetflix from "../NetflixPages/BrowsePage";
import ErrorNetflix from "../NetflixPages/ErrorPage";
import SingleNetflix from "../NetflixPages/singlePage";
import { bxios } from "../context/Axios";
import AddList from "../NetflixPages/addList";
import RecentAdded from "../NetflixPages/recentPage";

const AppRoutesNetflix = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getusers = async () => {
      const { data } = await bxios.get(`/users`);
      setUsers(data);
    };
    getusers();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginNetflix />} />
      {users ? (
        <Route path="/browse" element={<BrowseNetflix />} />
      ) : (
        <Route path="/*" element={<ErrorNetflix />} />
      )}
      <Route path="/browse/:id" element={<SingleNetflix />} />
      <Route path="/recently added" element={<RecentAdded />} />
      <Route path="/mylist" element={<AddList />} />
      <Route path="/*" element={<ErrorNetflix />} />
    </Routes>
  );
};
export default AppRoutesNetflix;
