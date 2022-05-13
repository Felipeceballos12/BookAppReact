import './Loading.css';

export function Loading() {
    return(
        <div className='loadingContainer'>
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <span>Loading</span>
        </div>   
    );
}