import {
  Dashboard,
  LibraryBooks,
  PointOfSale,
  School,
  VideoCall,
  Description,
  Ballot,
  SupportAgent,
  NotificationsActive,
} from "@mui/icons-material";
import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { setUserData } from "../../redux/features/userSlice";
import { useDispatch, useSelector } from "react-redux";

const sidebarOptions = [
  { title: "Home", icon: <Dashboard />, link: "/analytics" },
  { title: "Classes", icon: <LibraryBooks />, link: "/classes" },
  { title: "Schedule", icon: <VideoCall />, link: "/scheduled-classes" },
  { title: "Teachers", icon: <School />, link: "/teachers" },
  { title: "Students", icon: <School />, link: "/students" },
  { title: "Notes", icon: <Description />, link: "/notes" },
  { title: "Attendance", icon: <Ballot />, link: "/attendance" },
  // { title: "Accounts", icon: <PointOfSale />, link: "/accounts" },
  // { title: "Support", icon: <SupportAgent />, link: "/support" },
  // { title: "Notice", icon: <NotificationsActive />, link: "/notice" },
];

function Sidebar() {
  const pathname = useLocation();
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const userData = localStorage.getItem("dashboard-currentUser");
    if (userData) {
      dispatch(setUserData(JSON.parse(userData).foundUser));
    }
  }, []);

  return (
    <>
      <div className="sidebarContainer">
        <div className="sidebarOptions">
          {sidebarOptions.map((option, i) => {
            return (
              <Link to={option.link} key={i}>
                <div
                  className="options"
                  style={{
                    color:
                      option.link === pathname.pathname ? "#911d8c" : "gray",
                    background: option.link === pathname.pathname && "#ffe9e9",
                  }}
                >
                  <span>{option.icon}</span>
                  <p
                    style={{
                      color:
                        option.link === pathname.pathname ? "#911d8c" : "gray",
                    }}
                  >
                    {option.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mobiletouchBar">
        {sidebarOptions.map((option, i) => {
          return (
            <Link to={option.link} key={i}>
              <div
                className={"options"}
                style={{
                  color: option.link === pathname.pathname ? "#ffe9e9" : "gray",
                }}
              >
                <span>{option.icon}</span>
                <p>{option.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Sidebar;
