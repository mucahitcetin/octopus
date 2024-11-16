import Button from './Button';

const FilterSidebar = () => {
    return (
        <aside
            className="lg:w-[256px] bg-white p-4 border border-gray-300 rounded-lg shadow-lg"
            style={{ height: '341px' }}
        >
            {/* Quick Search */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Quick search"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-400"
                />
            </div>

            {/* Kategoriler Başlık */}
            <div>
                <h3 className="text-base font-bold mb-2 text-black">Kategoriler</h3>
                <hr className="border-t-2 border-black mb-4" />
                <ul className="space-y-2">
                    {['Kategori 1', 'Kategori 2', 'Kategori 3', 'Kategori 4', 'Kategori 5'].map((category, index) => (
                        <li key={index}>
                            <label className="flex items-center space-x-2 text-sm">
                                <input
                                    type="checkbox"
                                    className="form-checkbox text-primary border-gray-300 focus:ring-primary"
                                />
                                <span>{category}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Filtrele Butonu */}
            <div className="mt-4">
                <Button
                    text="Filtrele"
                    className="w-full h-[44px] bg-[#1E293B] text-white text-sm font-semibold rounded-lg hover:bg-[#0B0B20] focus:ring-2 focus:ring-[#1E293B]"
                />
            </div>
        </aside>
    );
};

export default FilterSidebar;
