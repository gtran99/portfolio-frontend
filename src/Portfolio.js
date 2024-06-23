import React, { useEffect, useState } from 'react';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-9tue.onrender.com/api/portfolio')
            .then(response => response.json())
            .then(data => setPortfolio(data))
            .catch(error => console.error('Error fetching portfolio data:', error));
    }, []);

    if (!portfolio) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{portfolio.name}</h1>
            <p>{portfolio.bio}</p>
            <h2>Projects</h2>
            <ul>
                {portfolio.projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>Project Link</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Portfolio;
