import { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Book.css';

export function Book({ 
    book, 
    setModalOpen,
    setCurrentBook
}) {

    const noImage = "https://bijao.uninorte.edu.co/tutoriales_tic/img/icono/no_imagen.png";
    const imageBook = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : noImage;
    const rootObserver = useRef(null);
    const [ imageObsever, isVisible ] = useIntersectionObserver({
        root: rootObserver.current,
        threshold: 0.06
    });

    const onClickOpenModal = () => {
        
        setCurrentBook({
            title: book.volumeInfo.title,
            bookImg: imageBook,
            author: book.volumeInfo.authors 
                ? book.volumeInfo.authors 
                : "anonymous",
            numPages: book.volumeInfo.pageCount 
                ? book.volumeInfo.pageCount 
                : "anonymous",
            language: book.volumeInfo.language,
            price: book.saleInfo.saleability === "FOR_SALE" 
                ? book.saleInfo.listPrice.amount 
                : "NOT FOR SALE",
            urlBook: book.volumeInfo.infoLink,
            description: book.volumeInfo.description ? book.volumeInfo.description : "no description"
        });
        setModalOpen(true);
    };
    

    return(
        <article className="card" onClick={ () => { onClickOpenModal() } }>
            <figure id={ book.id } className="cardContainer">
                <div ref={ rootObserver } className="">
                    <img src={ isVisible ? imageBook : "" } data-set={ imageBook } ref={ imageObsever } className="imgBook" alt={ book.volumeInfo.title } />
                </div>
                <figcaption className="containerTitleAndAuthor">
                    <p className="titleBook"> { book.volumeInfo.title } </p>
                    <p className="authorBook">By { book.volumeInfo.authors ? book.volumeInfo.authors : "anonymous" } </p>
                </figcaption>
            </figure>
        </article>
    );
}