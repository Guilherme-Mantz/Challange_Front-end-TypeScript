import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="bg-primary-color">
        <div className="container">
            <Link to="/" className="nav-link primary-color">TMDB</Link>
        </div>
    </header>
  )
};