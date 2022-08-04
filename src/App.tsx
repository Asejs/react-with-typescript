import { useState } from 'react'
import './App.css';
import List from "./components/List"
// useState hook - responsible for storing data inside of a component

// defines a certain state
interface IState {
  books: {
    title: string
    url: string
    author: string
    review?: string
  }[]
}

function App() {

  const [books, setBooks] = useState<IState["books"]>([
    {
      title: "Harry Potter",
      url: "https://www.boktips.no/content/uploads/2019/02/h%C3%B8st-bok-1024x596.jpg",
      author: "JK Rowling",
      review: "God bok."
    }
  ])

  return (
    <div className="App">
      <h1>Bøker jeg har lest</h1>
      <List books={books} />
    </div>
  );
}

export default App;
