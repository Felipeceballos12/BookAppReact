import './Books.css';
import { Book } from "../Book";
import { Loading } from '../Loading';

export function Books({ 
    listBooks, 
    error, 
    loading, 
    setModalOpen,
    setCurrentBook 
}) {
    return(
        <section id='container'>
            {
                loading && <Loading></Loading>
            }
            {
                error && <p>This book doesn't exist</p>
            }
            {
                listBooks.length > 0 && !error
                    &&
                        (listBooks.map(book => (
                            <Book
                                key={Math.random()}
                                book={ book }
                                setModalOpen={ setModalOpen }
                                setCurrentBook={ setCurrentBook }
                            />
                        )))
            }
        </section>
    );
}