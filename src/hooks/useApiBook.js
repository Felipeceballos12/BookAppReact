import { useState, useEffect } from "react";

export function useApiBook( searchValue ) {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [listBooks, setListBooks] = useState([]);
    
    
    useEffect(() => {
        
        if (!searchValue) {
          return;
        }

        setLoading(true);

        const url = "https://www.googleapis.com/books/v1/volumes?q=" 
                    + searchValue 
                    + "&maxResults=40&key=AIzaSyDB-MZbFuDTdQbAxGCuKYFNONPJapG5ckE";
            
        fetch(url)
        .then(booksResponse => {
            return booksResponse.json();
        })
        .then(booksData => {
            
            if (booksData.totalItems > 0) {
                setTimeout(() => {
                    setLoading(false);
                    setListBooks(booksData.items);
                }, 3000);
            } else {
                setError(true);
                setLoading(false);
            }
        })
        .catch(err => {
            console.error(err);
            setError(true);
        });

    }, [searchValue]);


    return {
        error,
        listBooks,
        setListBooks,
        loading,
    }

}
