import { useState } from 'react';
import './Search.css';

export function Search({ 
    setSearchValue,
    listBooks,
    setListBooks
}) {

    const [searchBookValue, setSearchBookValue] = useState('');
    const [classHeaderChange, setClassHeaderChange] = useState('');

    const onTextNameBookChange = (event) => {
        setSearchBookValue(event.target.value);
    };

    const headerAnimation = () => {
        setClassHeaderChange('changeHeightBackground')
    };

    const onSubmit = (event) => {

        event.preventDefault();
        
        if (listBooks.length > 0) {
            setListBooks([]);
        }

        setSearchValue(searchBookValue);
        headerAnimation();
    };

    return(
        <section id="containerBackground" className={ classHeaderChange && classHeaderChange }>
           <h1 id="titleSearchBook" style={{display: classHeaderChange ? 'none': 'block'}}>What book are you looking for?</h1>
            <article id="containerSearchBook">
                <form onSubmit={ onSubmit }>
                    <div id="containerSearchForm">
                        <input 
                            id="searchInput" 
                            type="text"
                            placeholder="Search for title"
                            name={ searchBookValue } 
                            onChange={ onTextNameBookChange }
                            autoComplete='off' 
                            required 
                        />
                        <button id="searchBtn" type="submit">
                            Search
                        </button>
                    </div>
                </form>
            </article>
        </section>
    );
}