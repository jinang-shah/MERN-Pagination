import middlePagination from "./middlePagination";
import "./Pagination.css";

const Pagination = ({ page, pages, changePage }) => {
  const links = [page - 2, page - 1, page, page + 1, page + 2];
  return (
    pages > 1 && (
      <div className="pagination">
        <button
          className="pagination__prev"
          onClick={() => changePage((page) => page - 1)}
          disabled={page === 1}
        >
          &#171;
        </button>

        {page <= 3 ? (
          <>
            {links.map((link, id) =>
              link >= 1 && link <= pages ? (
                <button
                  key={id}
                  onClick={() => changePage(link)}
                  disabled={page === link}
                >
                  {link}
                </button>
              ) : (
                <></>
              )
            )}
            <button>...</button>
            <button
              className="pagination__next"
              onClick={() => changePage(pages)}
              disabled={page === pages}
            >
              {pages}
            </button>
          </>
        ) : page >= 4 && page < pages - 2 ? (
          <>
            <button
              className="pagination__next"
              onClick={() => changePage(1)}
              disabled={page === 1}
            >
              1
            </button>
            <button>...</button>
            {links.map((link, id) =>
              link >= 1 && link <= pages ? (
                <button
                  key={id}
                  onClick={() => changePage(link)}
                  disabled={page === link}
                >
                  {link}
                </button>
              ) : (
                <></>
              )
            )}
            <button>...</button>
            <button
              className="pagination__next"
              onClick={() => changePage(pages)}
              disabled={page === pages}
            >
              {pages}
            </button>
          </>
        ) : page >= pages - 2 ? (
          <>
            <button
              className="pagination__next"
              onClick={() => changePage(1)}
              disabled={page === 1}
            >
              1
            </button>
            <button>...</button>
            {links.map((link, id) =>
              link >= 1 && link <= pages ? (
                <button
                  key={id}
                  onClick={() => changePage(link)}
                  disabled={page === link}
                >
                  {link}
                </button>
              ) : (
                <></>
              )
            )}
          </>
        ) : (
          <>
            <button
              className="pagination__next"
              onClick={() => changePage(1)}
              disabled={page === pages}
            >
              1
            </button>
            <button>...</button>

            <button
              className="pagination__next"
              onClick={() => changePage(pages)}
              disabled={page === pages}
            >
              {pages}
            </button>
          </>
        )}

        <button
          className="pagination__next"
          onClick={() => changePage((page) => page + 1)}
          disabled={page === pages}
        >
          &#187;
        </button>
      </div>
    )
  );
};

export default Pagination;
