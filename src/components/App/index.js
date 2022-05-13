import { useState } from 'react';
import { useApiBook } from '../../hooks/useApiBook';
import { BookDescription } from '../BookDescription';
import { Books } from '../Books';
import { Modal } from '../Modal';
import { Search } from '../Search';

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

      <Books
        listBooks={ listBooks }
        error={ error }
        loading={ loading }
        setModalOpen={ setModalOpen }
        setCurrentBook={ setCurrentBook }
      />
    </>
  );
}

export default App;
