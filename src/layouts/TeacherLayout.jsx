import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.scss";

// eslint-disable-next-line react/prop-types
export default function TeacherLayout({ children }) {
  return (
    <div className="dashboardLayout">
      <Header />
      <div className="dashboardBody">
        <Sidebar />
        <div className="dashboard-content">{children}</div>
      </div>
    </div>
  );
}
