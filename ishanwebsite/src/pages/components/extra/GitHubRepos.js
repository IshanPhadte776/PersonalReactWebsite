// components/GithubRepos.js
import { useEffect, useState } from "react";
import axios from "axios";

const GithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [searchLanguage, setSearchLanguage] = useState(""); // Track the search language
  const [filterButtonClicked, setFilterButtonClicked] = useState(false); // Track if filter button is clicked

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const fetchRepos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.github.com/users/IshanPhadte776/repos`

      );
      setRepos(response.data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

    const fetchTopics = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        'https://api.github.com/repos/IshanPhadte776/PersonalReactWebsite/topics'
      );
      setRepos(response.data);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleVisibility = () => {
    setExpanded(!expanded);
  };

  const handleLanguageChange = (event) => {
    setSearchLanguage(event.target.value);
  };

  const applyFilters = () => {
    setFilterButtonClicked(true);
  };

  const clearFilters = () => {
    setSearchLanguage("");
    setFilterButtonClicked(false);
  };

  const filteredRepos = repos.filter(
    (repo) => repo.language === searchLanguage
  );

  const displayRepos = filterButtonClicked ? filteredRepos : repos;

  return (
    <div>
      <h2>My GitHub Repositories</h2>
      <input
        type="text"
        value={searchLanguage}
        onChange={handleLanguageChange}
        placeholder="Filter by language"
      />
      <button onClick={applyFilters}>Update Filters</button>
      <button onClick={clearFilters}>Clear Filters</button>
      <button onClick={toggleVisibility}>
        {expanded ? "Collapse" : "Expand"} Repositories
      </button>
      {expanded && (
        <ul>
          {displayRepos.map((repo) => (
                          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">

            <li key={repo.id}>
              {repo.name} ({repo.languages_url})
              <br />
              Created: {convertDate(repo.created_at)}
              <br />
              Last Push: {convertDate(repo.pushed_at)}

            </li>
            </a>

          ))}
          {loading && <div>Loading more repositories...</div>}
          {filterButtonClicked && filteredRepos.length === 0 && !loading && (
            <div>No matching repositories found.</div>
          )}
        </ul>
      )}
    </div>
  );
};

export default GithubRepos;
