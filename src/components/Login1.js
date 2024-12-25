import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [selectedOption, setSelectedOption] = useState('SAAS');
  const navigate = useNavigate();

  const handleLogin = (provider) => {
    navigate('/repositories');
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.leftSection}>
          <div className={styles.statsCard}>
            {/* <img src="" alt="CodeAnt AI" className={styles.logo} /> */}
            <h3>AI to Detect & Autofix Bad Code</h3>
            
            <div className={styles.stats}>
              <div>
                <h4>30+</h4>
                <p>Language Support</p>
              </div>
              <div>
                <h4>10K+</h4>
                <p>Developers</p>
              </div>
              <div>
                <h4>100K+</h4>
                <p>Hours Saved</p>
              </div>
            </div>

            <div className={styles.issuesFixed}>
              <div className={styles.issuesStats}>
                <span>↑ 14%</span>
                <p>This week</p>
              </div>
              <h3>Issues Fixed</h3>
              <h2>500K+</h2>
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <img 
            src="https://media.licdn.com/dms/image/v2/D560BAQGncbvGj9h-YA/company-logo_200_200/company-logo_200_200/0/1700642866542/codeant_ai_logo?e=2147483647&v=beta&t=n7FJ33btckE3cs83Lg38lOnUKRwOKkAyeCv8sE-Nkww" 
            alt="CodeAnt AI"
            style={{height: 50, width: 50, marginBottom: 20}}
            
          />
        
          <h2>Welcome to CodeAnt AI</h2>

          <div className={styles.options}>
            <button 
              className={`${styles.option} ${selectedOption === 'SAAS' ? styles.selected : ''}`}
              onClick={() => setSelectedOption('SAAS')}
            >
              SAAS
            </button>
            <button 
              className={`${styles.option} ${selectedOption === 'Self Hosted' ? styles.selected : ''}`}
              onClick={() => setSelectedOption('Self Hosted')}
            >
              Self Hosted
            </button>
          </div>

          <div className={styles.loginButtons}>
            <button onClick={() => handleLogin('github')} className={styles.loginButton}>
              <img src="https://images.seeklogo.com/logo-png/30/2/github-logo-png_seeklogo-304612.png?v=1958564572871810328" alt="GitHub" />
              Sign in with Github
            </button>
            <button onClick={() => handleLogin('bitbucket')} className={styles.loginButton}>
              <img src="https://w7.pngwing.com/pngs/404/31/png-transparent-bitbucket-icon-hd-logo.png" alt="Bitbucket" />
              Sign in with Bitbucket
            </button>
            <button onClick={() => handleLogin('azure')} className={styles.loginButton}>
              <img src="https://cdn.iconscout.com/icon/free/png-256/free-azure-devops-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-vol-1-pack-logos-icons-3029870.png?f=webp&w=256" alt="Azure DevOps" />
              Sign in with Azure Devops
            </button>
            <button onClick={() => handleLogin('gitlab')} className={styles.loginButton}>
              <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png" alt="GitLab" />
              Sign in with GitLab
            </button>
          </div>

          <p className={styles.privacy}>
            By signing up you agree to the <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;