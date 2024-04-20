import "./App.css";
import Dashboard from "./components/Dashboard";
import Input from "./components/Input";
import { TodoContainer } from "./components/TodoContainer";
function App() {
  return (
    <div className="bg-[#0D0D0D] font-Josefin h-dvh">
      <div className="max-w-md mx-auto flex flex-col gap-8 pt-[50px]">
        <Dashboard />
        <Input />
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
