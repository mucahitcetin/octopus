import ReactPaginate from 'react-paginate';

interface PaginationProps {
    pageCount: number;
    onPageChange: ({ selected }: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
    return (
        <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={onPageChange}
            containerClassName="flex items-center justify-center space-x-2 mt-6"
            pageClassName="px-4 py-2 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
            activeClassName="bg-primary text-white"
            previousClassName="px-4 py-2 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
            nextClassName="px-4 py-2 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
        />
    );
};

export default Pagination;
