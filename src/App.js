import logo from './logo.svg';
import './App.css';
import './styles/app.css';
import TodosLogic from './components/TodosLogic';
import Header from "./components/Header";



const App = () => {
  return (
    <div className="wrapper">
      <div className="todos">
      
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};
export default App;
