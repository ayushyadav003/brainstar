import React from "react";
import {
  Dashboard,
  LibraryBooks,
  PointOfSale,
  School,
  VideoCall,
} from "@mui/icons-material/";

const sidebarOptions = [
  { title: "Dashboard", icon: <Dashboard /> },
  { title: "Classes", icon: <LibraryBooks /> },
  { title: "Meetings", icon: <VideoCall /> },
  { title: "Students", icon: <School /> },
  { title: "Accounts", icon: <PointOfSale /> },
];

function Sidebar() {
  return (
    <div>
      <div></div>
      <div>
        {sidebarOptions.map((option, i) => {
          return (
            <div key={i}>
              {option.icon}
              {option.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
