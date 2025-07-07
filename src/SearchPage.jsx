import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);

  const popularTags = [
    'Impressionism', 'Renaissance', 'Modern Art', 
    'Abstract', 'Portrait', 'Landscape', 'Sculpture'
  ];

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="search-page-container">
      <div className="search-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1 className="search-title">Search Artworks</h1>
      </div>
      
      <div className="search-bar-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search artworks, artists, movements..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button">Search</button>
      </div>

      <div className="tags-section">
        <h2 className="tags-title">Popular Tags</h2>
        <div className="tags-container">
          {popularTags.map(tag => (
            <button
              key={tag}
              className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results section would go here */}
    </div>
  );
}

export default SearchPage;
