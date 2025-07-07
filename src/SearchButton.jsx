
import { useNavigate } from 'react-router-dom';
function SearchButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');
  };

  return (
    <button onClick={handleClick}>
      🔍
    </button>
  );
}

export default SearchButton;