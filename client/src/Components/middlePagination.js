import './middlePagination.css'

const middlePagination = ({page,pages,changePage}) => {
    return(
        <div className='middlePagination'>
            <button onClick={()=>changePage((page) => page - 1)}>2</button>
        </div>
    );
}

export default middlePagination
