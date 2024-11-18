"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

type PaginationProps = {
    total: number;
    currentPage: number;
};

const Pagination = ({ total, currentPage }: PaginationProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { push } = useRouter();

    function handleChange({ selected }: { selected: number }) {
        const params = new URLSearchParams(searchParams);

        params.set("page", (selected + 1).toString());

        push(`${pathname}?${params.toString()}`);
    }

    return (
        <ReactPaginate
            previousLabel={"Prev"}
            nextLabel={"Next"}
            pageCount={Math.ceil(total / 9)}
            onPageChange={handleChange}
            initialPage={currentPage - 1}
            containerClassName="flex items-center justify-center space-x-2 mt-6"
            pageLinkClassName="px-4 py-2 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
            activeLinkClassName="bg-primary text-white"
            previousClassName="px-4 py-2 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
            nextClassName="px-4 py-2 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
        />
    );
};

export default Pagination;
