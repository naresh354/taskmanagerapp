import TaskManagement from "./components/TaskManagement";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <TaskManagement />
    </>
  );
}

export default App;
