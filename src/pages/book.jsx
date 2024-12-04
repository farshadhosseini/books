import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBookRequest } from "../services/book";

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState({});

  const getBook = async () => {
    try {
      const response = await getBookRequest(id);
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  return <>{book.title}</>;
};

export default Book;
