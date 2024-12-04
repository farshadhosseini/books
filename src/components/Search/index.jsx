import { useEffect, useState } from "react";
import { getBooksRequest } from "../../services/book";
import Button from "../Inputs/Button";
import TextInput from "../Inputs/Text";

const Search = ({ onComplelte, onProgress, searchjQuery = "", page = 1, limit = 15 }) => {
  const [query, setQuery] = useState(searchjQuery);
  const [loading, setLoading] = useState(false);

  const getBooks = async (e) => {
    if (e) e.preventDefault();
    try {
      setLoading(true);
      onProgress(true);
      const response = await getBooksRequest(query, page, limit);

      const pages = Math.ceil(response.data.numFound / limit);
      onComplelte(response.data.docs, pages, query);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      onProgress(false);
    }
  };

  useEffect(() => {
    if (page && searchjQuery) getBooks();
  }, [page]);

  return (
    <form
      onSubmit={getBooks}
      className="flex lg:flex-row flex-col gap-4 items-center"
    >
      <TextInput
        required
        type="text"
        name="search"
        value={query}
        onChangeHandler={(value) => {
          setQuery(value);
        }}
        placeholder="Book title, author, ..."
      />
      <Button
        title="Search the book"
        loading={loading}
        disabled={query.trim() === ""}
      />
    </form>
  );
};

export default Search;
