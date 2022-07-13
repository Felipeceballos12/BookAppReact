import { useState } from 'react';
import { useApiBook } from '../../hooks/useApiBook';
import { BookDescription } from '../BookDescription';
import { Books } from '../Books';
import { Modal } from '../Modal';
import { Search } from '../Search';
import { Loading } from '../Loading';
import { Book } from '../Book';

function App() {

  const [searchValue, setSearchValue] = useState('');
  const { error, loading, listBooks, setListBooks } = useApiBook(searchValue);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentBook, setCurrentBook] = useState({});
  
  return (
    <>
      <Search
        setSearchValue={ setSearchValue }
        setListBooks={ setListBooks }
        listBooks={ listBooks }
      />
      
      {
        !!modalOpen && (
          <Modal 
            setModalOpen={ setModalOpen } 
          >
            <BookDescription
              currentBook={ currentBook }
            >
            </BookDescription>
          </Modal>
        )
      }

      <Books>
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
      </Books>
    </>
  );
}

export default App;
