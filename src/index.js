import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book"
import { greeting } from "./testing/testing";
function BookList() {
  console.log(greeting)
  return (
    <section className="bookList">
      {books.map((book,index) => {
        return (
          <div>
            <Book key={book.id} {...book}></Book>
          </div>
        );
      })}
    </section>
  );
}


ReactDom.render(<BookList />, document.getElementById("root"));
