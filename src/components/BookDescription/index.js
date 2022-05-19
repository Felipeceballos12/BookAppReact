import './BookDescription.css';

export function BookDescription({ currentBook }) {

    return(
        <>
            <div className="containerImgAndBtn">
                <img className="containerModalImg" src={ currentBook.bookImg } alt={ currentBook.title } />
                <div>
                    <div className="titleModal">   
                        <h2>{ currentBook.title }</h2>
                    </div>
                    <p className="containerAboutAuthor">
                        <strong>author: </strong> 
                        { currentBook.author }
                    </p>
                    <p className="containerPriceAndPages">
                        <strong>Num Pages: </strong> 
                        #{ currentBook.numPages }
                    </p>
                    <p className="containerAboutAuthor">
                        <strong>language: </strong> 
                        { currentBook.language }
                    </p>
                    <p className="containerPriceAndPages">
                        <strong>price: </strong> 
                        { 
                            currentBook.price
                        }
                    </p>
                    
                    {
                        currentBook.price !== "NOT FOR SALE" 
                            ? <a href={ currentBook.urlBook } target="_blank" rel='noreferrer' className="urlBook">Go to Buy</a> 
                            : <div style={{ height: "42.57px" }}></div>
                    }

                </div>
            </div>
            <div>
                <p className="containerDescripcion" style={ 
                    currentBook.description.length > 334 
                        ? { height:"100px", overflowY:"auto" } 
                        : { height: "100%" }
                }>
                    <strong>description: </strong>
                    {
                        currentBook.description
                    }
                </p>
            </div>
        </>
    );
}