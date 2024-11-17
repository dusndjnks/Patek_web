import React from "react";
import { Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotfound"
import Watches from "./pages/Watches";
import WatchDetails from "./pages/WatchDetails";
import Layout from "./component/Layout";
import Dashboard from "./pages/admin/Dashboard";
import Income from "./pages/admin/Income";
import Review from "./pages/admin/Review";
import AdminLayout from "./component/AdminLayout";
import Watch from "./pages/admin/Watch";
import AdminWatchDetails from "./pages/admin/AdminWatchDetails";

function App() {  
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="watches" element={<Watches/>}/>
      <Route path="watches/:id" element={<WatchDetails/>}/> 

      <Route path="admin" element={<AdminLayout/>}>
      <Route index element={<Dashboard/>}/>
      <Route path="income" element={<Income/>}/>
      <Route path="review" element={<Review/>}/>
      <Route path="watches" element={<Watch/>}/>
      <Route path="watches/:id" element={<AdminWatchDetails/>}/>
      </Route>
    </Route>   
    </Routes>
  );
} 

export default App;
