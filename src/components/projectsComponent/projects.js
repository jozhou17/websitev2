import React from 'react';
import './projects.css';

function Projects(){
    return(
        <section className = 'projContainer' id = 'projID'>
            <header className = 'projTitleContainer'>
                <h1 className = 'projTitle'>Projects</h1>
            </header>
            <div className = 'projGroup'>
                <div className = 'project' id = 'p1'>
                    <h3 className = 'pcardTitle'>Online Web Scraper</h3>
                    <div className = 'words'>
                        <p>
                            Application that allows the user to input a word/website
                            and it returns the number of times that word appears.  Built with
                            Python, BeautifulSoup4 Library, and Django.
                        </p>
                        <p className = 'tech'>Python <i class="fab fa-python"></i>· Django</p>
                    </div>
                </div>
                <div className = 'project' id = 'p2'>
                    <h3 className = 'pcardTitle'>Disease Database</h3>
                        <ul>
                            <li>
                                Practiced SQL by building tables for pathogens/infections which recorded statistics
                                for each one 
                            </li>  
                            <li>
                                Implemented techniques like PK/FK/check constraints as well as 
                                created complex queries utilizing joins/inline views/aggregation,etc
                            </li>
                        </ul>
                    <p className = 'tech'>SQL <i class="fas fa-database"></i></p>
                </div>
                <div className = 'project' id = 'p3'>
                    <h3 className = 'pcardTitle'>This Personal Site</h3>
                    <p>
                        Second iteration of my personal site, worked to improve on the look/design
                        as well as include more functonalities.  Built with React.
                    </p>
                    <p className = 'tech'>ReactJS <i class="fab fa-react"></i></p>
                </div>
            </div>
            
            <div className = 'responsivep1Container'>
                <div className = 'project' id = 'responsivep1'>
                    <h3 className = 'pcardTitle'>Online Web Scraper</h3>
                    <div className = 'words'>
                        <p>
                            Application that allows the user to input a word/website
                            and it returns the number of times that word appears.  Built with
                            Python, BeautifulSoup4 Library, and Django.
                        </p>
                        
                        <p className = 'tech'>Python <i class="fab fa-python"></i>· Django</p>
                    </div>
                </div>
            </div>
            <div className = 'responsivep3Container'>
                <div className = 'project' id = 'responsivep3'>
                    <h3 className = 'pcardTitle'>This Personal Site</h3>
                    <p>
                        Second iteration of my personal site, worked to improve on the look/design
                        as well as include more functonalities.  Built with React.
                    </p>
                    <p className = 'tech'>ReactJS <i class="fab fa-react"></i></p>
                </div>
            </div>
            <div className = 'responsivep2Container'>
                <div className = 'project' id = 'responsivep2'>
                    <h3 className = 'pcardTitle'>Disease Database</h3>
                        <ul>
                            <li>
                                Practiced SQL by building tables for pathogens/infections which recorded statistics
                                for each one 
                            </li>  
                            <li>
                                Implemented techniques like PK/FK/check constraints as well as 
                                created complex queries utilizing joins/inline views/aggregation,etc
                            </li>
                        </ul>
                    <p className = 'tech' id = 'techp2'>SQL <i class="fas fa-database"></i></p>
                </div>
            </div>
        </section>
    )

}

export default Projects;