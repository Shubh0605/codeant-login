import React, { useState } from 'react';
import styles from './Repository.module.css';

const Repository = () => {
  const [repositories] = useState([
    {
      name: 'design-system',
      type: 'Public',
      language: 'React',
      size: '7320 KB',
      updated: '1 day ago'
    },
    {
      name: 'codeant-ci-app',
      type: 'Private',
      language: 'Javascript',
      size: '5871 KB',
      updated: '2 days ago'
    },
    {
      name: 'analytics-dashboard',
      type: 'Private',
      language: 'Python',
      size: '4521 KB',
      updated: '5 days ago'
    },
    {
      name: 'mobile-app',
      type: 'Public',
      language: 'Swift',
      size: '3096 KB',
      updated: '3 days ago'
    }
  ]);

  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.profile}>
          <img src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww" alt="CodeAnt AI" />
          <h2>CodeAnt AI</h2>
        </div>
        
        <select>
          <option>UtkarshDhairyaPanwar</option>
        </select>

        <nav className={styles.nav}>
          <a href="#" className={styles.active}>Repositories</a>
          <a href="#">AI Code Review</a>
          <a href="#">Cloud Security</a>
          <a href="#">How to Use</a>
          <a href="#">Settings</a>
        </nav>

        <div className={styles.bottomNav}>
          <a href="#">Support</a>
          <a href="#">Logout</a>
        </div>
      </aside>

      <main className={styles.main}>
        <header className={styles.header}>
          <div>
            <h1>Repositories</h1>
            <p>33 total repositories</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.refresh}>Refresh All</button>
            <button className={styles.add}>Add Repository</button>
          </div>
        </header>

        <div className={styles.search}>
          <input type="text" placeholder="Search Repositories" />
        </div>

        <div className={styles.repositories}>
          {repositories.map((repo) => (
            <div key={repo.name} className={styles.repository}>
              <div className={styles.repoInfo}>
                <h3>{repo.name}</h3>
                <span className={`${styles.type} ${styles[repo.type.toLowerCase()]}`}>
                  {repo.type}
                </span>
              </div>
              <div className={styles.repoMeta}>
                <span className={styles.language}>
                  <span className={styles.dot} style={{ backgroundColor: getLanguageColor(repo.language) }}></span>
                  {repo.language}
                </span>
                <span className={styles.size}>{repo.size}</span>
                <span className={styles.updated}>Updated {repo.updated}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

const getLanguageColor = (language) => {
  const colors = {
    React: '#61dafb',
    Javascript: '#f7df1e',
    Python: '#3776ab',
    Swift: '#ffac45',
    Java: '#007396',
    'HTML/CSS': '#e34c26',
    PHP: '#777bb4'
  };
  return colors[language] || '#666';
};

export default Repository;