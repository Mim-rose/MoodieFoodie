import React, { useRef, useState, useEffect } from 'react';
import banner1 from "../assets/home/banner.jpg";
import Cover from "../pages/Cover";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from './hooks/useMenu';
import Cards from './Cards';
import Categories from './Categories';
import Pagination from './Pagination'; // Make sure this path is correct

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [menu] = useMenu();
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  // Reset pagination when switching tabs
  useEffect(() => {
    setCurrentPage(1);
  }, [tabIndex]);

  return (
    <div>
      <Cover img={banner1} title="Order Food" />

      <div className="relative px-4 py-6">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
        >
          ◀
        </button>

        {/* Scrollable TabList */}
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide px-10"
          >
            {Categories.map((cat) => (
              <Tab
                key={cat.id}
                className="flex flex-col items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition cursor-pointer focus:outline-none min-w-[80px]"
              >
                <div className="text-orange-600">{cat.icon}</div>
                <span className="text-sm font-medium capitalize text-gray-700">
                  {cat.name.replace("_", " ")}
                </span>
              </Tab>
            ))}
          </TabList>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-gray-100"
          >
            ▶
          </button>

          {/* TabPanels */}
          {Categories.map((cat) => {
            const filteredItems =
              cat.name === "all"
                ? menu
                : menu.filter(item =>
                    item.food_category?.toLowerCase() === cat.name.toLowerCase()
                  );

            const totalItems = filteredItems.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage);
            const paginatedItems = filteredItems.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            );

            return (
              <TabPanel key={cat.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-4">
                  {paginatedItems.length > 0 ? (
                    paginatedItems.map(item => (
                      <Cards key={item._id} item={item} />
                    ))
                  ) : (
                    <p className="text-center text-gray-500">No items found in this category.</p>
                  )}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                )}
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default Order;