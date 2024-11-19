"use client";
import { FormEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";
import { categories } from "../constants";

const FilterSidebar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (searchTerm) {
      params.set("search", searchTerm);
    }

    if (selectedCategory && selectedCategory !== "all") {
      params.set("category", selectedCategory);
    }

    params.delete("page");

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-[256px] bg-white p-4 border border-gray-300 rounded-lg shadow-lg"
      style={{ height: "348px" }}
    >
      {/* Quick Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Quick search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
        />
      </div>

      {/* Kategoriler Başlık */}
      <div>
        <h3 className="text-base font-bold mb-2 text-black">Kategoriler</h3>
        <hr className="border-t-2 border-black mb-4" />
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <label className="flex items-center space-x-2 text-sm">
                <input
                  name="cat"
                  value={category.value}
                  type="radio"
                  defaultChecked={category.value === searchParams.get("category")}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="form-checkbox text-primary border-gray-300 focus:ring-primary"
                />
                <span>{category.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Filtrele Butonu */}
      <div className="mt-2">
        <Button
          text="Filtrele"
          className="w-full h-[44px] bg-[#1E293B] text-white text-sm font-semibold rounded-lg hover:bg-[#0B0B20] focus:ring-2 focus:ring-[#1E293B]"
        />
      </div>
    </form>
  );
};

export default FilterSidebar;
