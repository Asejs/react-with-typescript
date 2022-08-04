
interface IProps {
    books: {
      title: string
      url: string
      author: string
      review?: string
    }[]
  }

const List: React.FC<IProps> = ({ books }) => {

    const renderList = (): JSX.Element[] => {
        return books.map((book) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={ book.url }/>
                        <h2>{ book.title }</h2>
                    </div>
                    <p>Author: { book.author }</p>
                    <p className="List-note">{ book.review }</p>
                </li>
            )
        })
    }
    return (
        <ul>
            { renderList() }
        </ul>
    )
}

export default List