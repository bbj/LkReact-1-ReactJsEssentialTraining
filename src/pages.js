import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';

export function Home() {
  return (<div>
    <h1>[Company Website]</h1>
    <nav>
      <Link to="about">About</Link>
      <span> </span><Link to="events">Events</Link>
      <span> </span><Link to="about">Contact</Link>
    </nav>
  </div>);
}

export function About() {
  return (<div>
    <h1>[About]</h1>
    <Outlet />
  </div>);
}

export function Services() {
  return (<div>
    <h2>Our Services</h2>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>);
}

export function CompanyHistory() {
  return (<div>
    <h2>Our History</h2>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>);
}

export function Location() {
  return (<div>
    <h2>Our Location</h2>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>);
}

export function Events() {
  return (<div>
    <h1>[Events]</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>);
}

export function Contact() {
  return (<div>
    <h1>[Contact]</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>);
}

export function Whoops404() {
  const location = useLocation();
  //console.log(location);
  return (<div>
    <h1>The resource does not exist: {location.pathname}!</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>);
}
