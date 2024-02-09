import { Link, Routes, Route } from 'react-router-dom';
import logo from './assets/logo.png'
import addBtn from './assets/add-btn.png'
import "./app.scss"

const App = () => {
  return (
    <>
      <header>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className="logo-container"
        >
          <img src={logo} alt="logo" className="logo" />
          <h2>Notably</h2>
          <input type="text" placeholder="Search for flashcards" />
        </Link>
        <div className="create-container">
          <Link
            to="/create-flashcard"
            style={{ textDecoration: "none" }}
            className="rhs-nav"
          >
            <img src={addBtn} alt="add button" className='add-btn'/>
          </Link>
        </div>
      </header>
      <Routes></Routes>
    </>
  );
}

export default App
