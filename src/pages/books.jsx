import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "../components/Search";
import { Pagination } from "../components/Pagination";
import Title from "../components/Title";

const Books = () => {
  const {
    state: { data, pages, query },
  } = useLocation();
  const [books, setBooks] = useState(data);
  const [onProgress, setOnProgress] = useState(false);
  const [totalPages, setTotalPages] = useState(pages);
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {}, [onProgress]);

  return (
    <>
      <div className="bg-slate-200 p-3 sticky top-0">
        <Title />
        <Search
          searchjQuery={query}
          page={page}
          onProgress={(status) => setOnProgress(status)}
          onComplelte={(data, pages) => {
            setBooks(data);
            setTotalPages(pages);
          }}
        />
      </div>
      <div className="rounded-md">
        {books?.length && !onProgress ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 break-words">
            {books.map((book) => (
              <Link
                to={`/books${book.key}`}
                key={book.key}
                className="bg-gray-100 p-5 m-3 rounded-md border "
              >
                <h3 className="font-bold text-lg">{book.title}</h3>
                <p>written by : {book.author_name}</p>
                <hr />
                <p>publish year : {book.first_publish_year}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-violet-400 p-4 m-3 rounded-md border text-white">
            {onProgress ? "Loading, Please Wait ..." : " No Result Found!"}
          </div>
        )}
      </div>
      <div className="p-3">
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Books;
