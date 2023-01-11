import React from 'react'

const Book = ({ img,title,author}) => {
    // const { img, title, author } = props.book;
    // event in react (aatribute,eventhanlder)
    // onclick, on mouseover
    const clickHandler =(e) =>{
     console.log(e)
     console.log(e.target)
      alert("hello world")
    }
    const comEx= (author) =>{
  console.log(author)
    }; 
  
    
    return (
      <article className="book" onMouseOver={()=>{
        console.log(title)
      }}>
        <img src={img} alt="book"></img>
  
        <h1 onClick={() =>console.log(title)}>{title}</h1>
        <h4>{author}</h4>
  
        <p>{title} </p>
        <button type="button" onClick={clickHandler}>Buy</button>
        <button type="button" onClick={() => comEx(author)}>arko</button>
      </article>
    );
  };

export default Book;
