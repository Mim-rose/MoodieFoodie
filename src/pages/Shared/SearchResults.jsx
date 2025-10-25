import { useLocation } from "react-router-dom";
import useMenu from "../hooks/useMenu"; // your custom hook
import Cards from "../Cards"; 

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q")?.toLowerCase() || "";
  const [menu] = useMenu();

  const filtered = menu.filter(item =>
    item.food_name?.toLowerCase().includes(query) ||
    item.food_category?.toLowerCase().includes(query) ||
    item.tags?.some(tag => tag.toLowerCase().includes(query))
  );

  return (
    <div className="px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(item => (
            <Cards key={item._id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No items found.</p>
      )}
    </div>
  );
};

export default SearchResults;