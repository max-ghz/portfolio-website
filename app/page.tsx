import Image from 'next/image';
import { FaDiscord, FaGithub } from 'react-icons/fa';

export default function Home() {
    return (
        <main className="container">
            <aside className="sidebar">
                <div className="sidebar-image">
                    <Image
                        src="/me.jpg"
                        alt="My picture"
                        fill
                        style={{
                            objectFit: 'cover',
                            border: '2px solid #00f0ff',
                            borderRadius: '2px',
                            imageRendering: 'pixelated',
                            boxShadow: '2px 2px 0 #000000, -2px -2px 0 #001122',
                        }}
                    />
                </div>

                <div className="sidebar-section">
                    <h2>Languages</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                        <li>Bash</li>
                        <li>SQL</li>
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h2>Frameworks</h2>
                    <ul>
                        <li>React</li>
                        <li>Next</li>
                        <li>Django</li>
                        <li>Nest</li>
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h2>Tools</h2>
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Nginx</li>
                        <li>PostqreSQL</li>
                        <li>SQLite</li>
                    </ul>
                </div>

                <div className="sidebar-section">
                    <h2>Editors</h2>
                    <ul>
                        <li>WebStorm</li>
                        <li>PyCharm</li>
                    </ul>
                </div>
            </aside>

            <div className="main-content">
                <section>
                    <h1>maxghz</h1>
                    <p>Web Developer</p>
                </section>

                <section>
                    <h2>About</h2>
                    <p>
                        Experienced in full-stack web development, working on
                        both frontend and backend applications. Familiar with
                        memory allocation, dynamic data structures, efficient
                        data handling, web scraping and data extraction.
                    </p>
                </section>

                <section>
                    <h2>Projects</h2>

                    <div className="project">
                        <p>
                            <a
                                href="https://soldankpp.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                soldankpp.app
                            </a>{' '}
                            <span>in progress...</span>
                        </p>
                        <div className="tech-tags">
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">TypeScript</span>
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">Nest</span>
                            <span className="tech-tag">Tailwind CSS</span>
                            <span className="tech-tag">Shadcn</span>
                            <span className="tech-tag">Canvas</span>
                            <span className="tech-tag">HTML</span>
                        </div>
                        <p>
                            Full-stack website for 2D arcade game Soldank++.
                            Built with Vite + React on the frontend, using
                            Tailwind CSS, Shadcn as UI library, and the HTML
                            Canvas API, with a NestJS backend for API and data
                            management.
                        </p>
                    </div>

                    <div className="project">
                        <p>
                            <a
                                href="https://github.com/max-ghz/django-app"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                oldclimbstats.eu
                            </a>{' '}
                            <span>in progress...</span>
                        </p>
                        <div className="tech-tags">
                            <span className="tech-tag">Python</span>
                            <span className="tech-tag">Django</span>
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">SASS</span>
                            <span className="tech-tag">HTMX</span>
                            <span className="tech-tag">HTML</span>
                        </div>
                        <p>
                            Full-stack website displaying historical statistics
                            for 2D game Soldat. Built with Django REST Framework
                            on the backend and HTMX for frontend interactivity,
                            styled using the SASS preprocessor, and enhanced
                            with a bit of JavaScript.
                        </p>
                    </div>
                </section>

                <section className="certificate-section">
                    <h2>Certificates</h2>
                    <p>CS50x: Introduction to Computer Science</p>
                    <p>CS50’s Web Programming with Python and JavaScript </p>
                    <p>
                        PCPP1 – Certified Professional Python Programmer Level 1
                    </p>

                    <div className="corner-icons">
                        <a
                            href="https://discord.com/users/671726732155420682"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaDiscord className="icon" />
                        </a>
                        <a
                            href="https://github.com/max-ghz"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub className="icon" />
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}
