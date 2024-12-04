import { BrowserRouter, Route, Routes } from "react-router-dom";
import Book from "./pages/book";
import Home from "./pages/home";
import Books from "./pages/books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="books" element={<Books />} />
        <Route path="books/works/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
