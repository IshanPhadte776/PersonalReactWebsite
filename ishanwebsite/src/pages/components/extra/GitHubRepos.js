import React, { useEffect, useState } from "react";
import axios from "axios";

import PieChart from "./PieChart";
import GithubStats from "./GithubStats";

const GithubRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const [searchLanguage, setSearchLanguage] = useState("");
  const [filterButtonClicked, setFilterButtonClicked] = useState(true);

  const [highlightedLanguage, setHighlightedLanguage] = useState("");
  const [numOfProjects, setNumOfProjects] = useState("");

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
    const colors = ["#CFBFFF", "#8577E6", "#C8C8FA", "#929BE5", "#829EFA"];
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

  const handleSliceHover = (language) => {
    setHighlightedLanguage(language);
    setNumOfProjects(data.find((item) => item.label === language).value);
  };

  const [hoveredRepo, setHoveredRepo] = useState(null);

  const handleMouseEnter = (repoId) => {
    setHoveredRepo(repoId);
  };

  const handleMouseLeave = () => {
    setHoveredRepo(null);
  };


  const filteredRepos = repos.filter(
    (repo) => repo.language === searchLanguage
  );
  const displayRepos = filterButtonClicked ? filteredRepos : repos;

  

  return (
    
    <div className=" rounded-md p-4 ">
      <div className="flex flex-row">
        <div className="w-3/5">
          <PieChart data={data} onSliceHover={handleSliceHover} />
        </div>

        <div className="flex flex-col w-2/5 pr-4">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <h2 className="text-2xl font-bold">
                Ishan Phadte's GitHub Repositories
              </h2>
            </div>
            <div className="flex flex-col space-y-2">
              <GithubStats> </GithubStats>

              <h3>Language Highlighted: {highlightedLanguage}</h3>
              <h3> Number of Projects: {numOfProjects}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex space-x-4">
          <input
            type="text"
            value={searchLanguage}
            onChange={handleLanguageChange}
            placeholder="Filter by language"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <div className="mt-4 space-x-2">
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4">
        {loading ? (
          <p>Loading repositories...</p>
        ) : (
<ul className="mt-4 space-y-4">
  {displayRepos.map((repo) => (
    <li
  key={repo.id}
  className={`flex items-start cursor-pointer rounded p-6 ${
    repo.id === hoveredRepo ? 'border-4 border-8577E6' : ''
  }`}
  onClick={() => window.open(repo.html_url, '_blank')}
  onMouseEnter={() => handleMouseEnter(repo.id)}
  onMouseLeave={handleMouseLeave}
>
      <span className="mr-2">&#8226;</span>
      <div className="flex-1">
      <h3 className="font-bold underline text-8677E6">{repo.name}</h3>
        <div>{repo.description}</div>
        <div>{repo.created_at}</div>
        {repo.topics && repo.topics.length > 0 && (
          <div className="ml-4">
            <span className="font-semibold">Topics: </span>
            {repo.topics.map((topic, index) => (
              <React.Fragment key={topic}>
                {index > 0 && ", "}
                {topic}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </li>
  ))}
</ul>





        )}
      </div>
      
    </div>
    
  );
  
};


export default GithubRepos;
