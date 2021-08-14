import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button";
import Categories from "../../components/Categories";
import PortfolioSection from "../../components/PortfolioSection";
import Title from "../../components/Title";
import { UserContext } from "../../context/User";
import "./styles.scss";

export default function PortfolioPage() {
  const { projects } = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [projectItems, setProjectItems] = useState(projects);
  const [endIndex, setEndIndex] = useState(Math.min(6, projectItems.length));

  useEffect(() => {
    const set = new Set();
    projects.forEach(({ languages, libraries }) => {
      const [l1, l2] = [languages.length, libraries.length];
      for (let i = 0; i < Math.max(l1, l2); i++) {
        if (i < l1 && !set.has(languages[i])) {
          set.add(languages[i]);
        }
        if (i < l2 && !set.has(libraries[i])) {
          set.add(libraries[i]);
        }
      }
    });
    setCategories([currentCategory, ...set]);
  }, []);

  const filter = (category) => {
    if (category === "All") {
      setProjectItems(projects);
      setEndIndex(Math.min(6, projects.length));
    } else {
      const filteredData = projects.filter(
        ({ languages, libraries }) =>
          languages.includes(category) || libraries.includes(category)
      );
      setProjectItems(filteredData);
      setEndIndex(Math.min(6, filteredData.length));
    }
    setCurrentCategory(category);
  };

  const updateEndIndex = () => {
    const projectsArrLength = projectItems.length;
    const newEndIndex = endIndex + 4;
    if (newEndIndex < projectsArrLength) {
      setEndIndex(newEndIndex);
    } else {
      setEndIndex(projectsArrLength);
    }
  };

  return (
    <div id="portfoliosPage" className="portfolio-page" data-aos="fade-right">
      <div className="title">
        <Title title={"Portfolios"} />
      </div>
      <div className="portfolios-data">
        <Categories
          filter={filter}
          categories={categories}
          currentCategory={currentCategory}
        />
        <PortfolioSection projectItems={projectItems.slice(0, endIndex)} />
        <Button handleCLick={updateEndIndex}>Load More Projects</Button>
      </div>
    </div>
  );
}
