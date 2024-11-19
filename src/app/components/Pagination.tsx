"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

const Pagination = ({ total }: { total: number }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange({ selected }: { selected: number }) {
    const params = new URLSearchParams(searchParams);

    params.set("page", (selected + 1).toString());

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <ReactPaginate
      previousLabel={"Prev"}
      nextLabel={"Next"}
      pageCount={Math.floor(total / 9)}
      onPageChange={handleChange}
      containerClassName="flex items-center justify-center space-x-2 mt-6"
      pageLinkClassName="px-4 py-2 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
      activeLinkClassName="bg-primary text-white"
      previousClassName="px-4 py-2 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
      nextClassName="px-4 py-2 border rounded-md cursor-pointer hover:bg-primary hover:text-white"
    />
  );
};

export default Pagination;
