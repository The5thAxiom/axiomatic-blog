import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';

import Navbar from './components/navbar';
import About from './pages/about';
import BlogPost from './pages/blogPost';
import Home from './pages/home';
import { posts } from './posts';

import './theme.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HashRouter basename=''>
            <Routes>
                <Route
                    path='/'
                    element={
                        <>
                            <Navbar />
                            <main>
                                <Outlet />
                            </main>
                        </>
                    }
                >
                    <Route index element={<Home />} />
                    <Route path='/post' element={<Outlet />}>
                        {posts.map((post, index) => (
                            <Route
                                key={index}
                                path={`/post/${post.id}`}
                                element={<BlogPost {...post} />}
                            />
                        ))}
                    </Route>
                    <Route path='/about' element={<About />} />
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
