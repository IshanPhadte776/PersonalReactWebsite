import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./GithubRepo.module.css";
import PieChart from "./PieChart";

const GithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const [searchLanguage, setSearchLanguage] = useState("");
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const splitDescription = (description) => {
    if (!description) {
      return [];
    }

    const discriptionSection = description.split("Tools:")[0];
    const toolsSection = description.split("Tools:")[1];

    if (!toolsSection) {
      return [];
    }

    const toolsArray = toolsSection.split(",").map((tool) => tool.trim());
    const toolsString = toolsArray.join(", ");

    const returnArray = [discriptionSection, toolsString];
    return returnArray;
  };

  const fetchRepos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://api.github.com/users/IshanPhadte776/repos?sort=created&direction=desc"
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

  let previousColor = null;

  const getRandomColor = () => {
    const colors = ["#004EF5", "#0C06D4", "#5D05EB", "#A109D6", "#F707CE"];
    let randomIndex = Math.floor(Math.random() * colors.length);
    
    // If the previously selected color exists, ensure the new random color is different
    if (previousColor !== null) {
      while (colors[randomIndex] === previousColor) {
        randomIndex = Math.floor(Math.random() * colors.length);
      }
    }
    
    previousColor = colors[randomIndex];
    return previousColor;
  };
  
  

  const languageCounts = repos.reduce((counts, repo) => {
    const { language } = repo;
    if (language) {
      counts[language] = (counts[language] || 0) + 1;
    }
    return counts;
  }, {});

  const data = Object.entries(languageCounts).map(([language, count]) => {
    return {
      label: language, // Language label
      value: count, // Count of repositories
      percentage: ((count / repos.length) * 100).toFixed(2), // Percentage of repositories
      color: getRandomColor(),
    };
  });
  

  const filteredRepos = repos.filter((repo) => repo.language === searchLanguage);
  const displayRepos = filterButtonClicked ? filteredRepos : repos;

  return (
    <div>
      <h2>My GitHub Repositories</h2>
      <PieChart data={data} />
      <input
        type="text"
        value={searchLanguage}
        onChange={handleLanguageChange}
        placeholder="Filter by language"
        className={styles.languageFilter}
      />
      <button onClick={applyFilters} className={styles.filterButton}>
        Update Filters
      </button>
      <button onClick={clearFilters} className={styles.filterButton}>
        Clear Filters
      </button>
      <button onClick={toggleVisibility} className={styles.expandButton}>
        {expanded ? "Collapse" : "Expand"} Repositories
      </button>
      {expanded && (
        <ul className={styles.repoList}>
          {displayRepos.map((repo) => (
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.repoLink}
              key={repo.id}
            >
              <li className={`${styles.repoItem} ${styles.curvedBox}`}>
                <span className={styles.repoName}>
                  {repo.name} ({repo.language})
                </span>
                <br />
                Created: {convertDate(repo.created_at)}
                <br />
                Last Push: {convertDate(repo.pushed_at)}
                <br />
                Description: {splitDescription(repo.description)[0]}
                <br />
                Tools: {splitDescription(repo.description)[1]}
              </li>
            </a>
          ))}
          {loading && (
            <div className={styles.loadingMessage}>Loading more repositories...</div>
          )}
          {filterButtonClicked && filteredRepos.length === 0 && !loading && (
            <div className={styles.noMatchingRepos}>No matching repositories found.</div>
          )}
        </ul>
      )}
    </div>
  );
};

export default GithubRepos;
