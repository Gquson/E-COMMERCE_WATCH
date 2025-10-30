import React, { useState, useEffect, useMemo } from "react";
import { useApp } from "../hooks/useApp";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const {
    products,
    searchTerm,
    setSearchTerm,
    sortOption,
    setSortOption,
    filterCategory,
    setFilterCategory,
  } = useApp();

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(term) ||
          product.features.toLowerCase().includes(term)
      );
    }

    if (filterCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === filterCategory
      );
    }

    switch (sortOption) {
      case "Low to High":
        return [...filtered].sort((a, b) => a.amount - b.amount);
      case "High to Low":
        return [...filtered].sort((a, b) => b.amount - a.amount);
      case "top rated":
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case "latest to oldest":
        return [...filtered].reverse();
      case "oldest to latest":
        return filtered;
      default:
        return filtered;
    }
  }, [products, searchTerm, sortOption, filterCategory]);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortOption, filterCategory]);

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "luxury", label: "Luxury" },
    { value: "sports", label: "Sports" },
    { value: "classic", label: "Classic" },
  ];

  const sortOptions = [
    { value: "", label: "Sort by" },
    { value: "Low to High", label: "Price: Low to High" },
    { value: "High to Low", label: "Price: High to Low" },
    { value: "top rated", label: "Top Rated" },
    { value: "latest to oldest", label: "Latest First" },
    { value: "oldest to latest", label: "Oldest First" },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilterCategory("all");
    setSortOption("");
    setCurrentPage(1);
  };

  return (
    <div className="pt-24 min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-yellow-500 mb-4">
            ROYAL COLLECTION
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite timepieces, each telling a story of
            craftsmanship and heritage
          </p>
        </div>

        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="lg:col-span-1">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full border-2 border-yellow-500/30 rounded-2xl h-14 px-4 sm:px-6 focus:outline-none focus:border-yellow-500 focus:shadow-lg transition-all duration-300 bg-gray-800 text-white appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-2 relative">
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-2 border-yellow-500/30 rounded-2xl h-14 px-4 sm:px-6 pr-12 focus:outline-none focus:border-yellow-500 focus:shadow-lg transition-all duration-300 bg-gray-800 text-white placeholder-gray-400"
                placeholder="Search royal Legacy..."
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-yellow-500 text-lg">
                🔍
              </span>
            </div>

            <div className="lg:col-span-1">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full border-2 border-yellow-500/30 rounded-2xl h-14 px-4 sm:px-6 focus:outline-none focus:border-yellow-500 focus:shadow-lg transition-all duration-300 bg-gray-800 text-white appearance-none cursor-pointer"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-2">
            <div className="text-gray-400 text-sm sm:text-base">
              Showing {filteredProducts.length} of {products.length} products
              {currentProducts.length > 0 &&
                ` • Page ${currentPage} of ${totalPages}`}
            </div>

            {(searchTerm || filterCategory !== "all" || sortOption) && (
              <button
                onClick={clearFilters}
                className="text-yellow-500 hover:text-yellow-400 text-sm font-medium transition-colors duration-300 flex items-center space-x-1"
              >
                <span>✕</span>
                <span>Clear filters</span>
              </button>
            )}
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-6">🔍</div>
            <h3 className="text-2xl font-serif text-white mb-4">
              No products found
            </h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what you're
              looking for.
            </p>
            <button
              onClick={clearFilters}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {filteredProducts.length > 0 && totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:hover:scale-100"
            >
              Previous
            </button>

            <div className="flex space-x-2 flex-wrap justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-semibold transition-all duration-300 ${
                      page === currentPage
                        ? "bg-yellow-600 text-white shadow-lg scale-110"
                        : "bg-gray-800 text-yellow-500 hover:bg-yellow-600 hover:text-white hover:shadow-md"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:hover:scale-100"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
