import React, { useEffect, useState } from 'react';

function Projects() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/yourusernamehttps://api.github.com/repos/martinbanc/textBased_game/repos')
            .then(response => response.json())
            .then(data => setRepos(data));
    }, []);

    return (
        <div>
            {repos.map(repo => (
                <div key={repo.id}>
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>
                    <a href={repo.html_url}>GitHub Link</a>
                </div>
            ))}
        </div>
    );
}

export default Projects;