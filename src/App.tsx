import { Routes, Route, Navigate } from "react-router";

import Layout from "./pages/_layout";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Project from "./pages/project";
import Skill from "./pages/skill";

export default function App() {
   return (
      <Routes>
         <Route element={<Layout />}>
            <Route index element={<Navigate to="/contact" replace />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skill" element={<Skill />} />
         </Route>
      </Routes>
   );
}
