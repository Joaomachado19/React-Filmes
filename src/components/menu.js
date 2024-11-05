import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./menu.css";
import { useEffect, useState } from 'react';
function Menu({ onGenreClick }) {
  const [genres, setGenres] = useState([]);
  const KEY = process.env.REACT_APP_KEY;
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${KEY}&language=pt-BR`
    )
     .then((response) => response.json())
     .then((data) => {
        setGenres(data.genres);
      });
  }, [KEY]);
    return (
        <Nav variant="pills" activeKey="1" id='menu' navbar>
        <NavDropdown title="Categorias" id="nav-dropdown">
        {genres.map((genre) => {
          return (
            <NavDropdown.Item onClick={() => onGenreClick(genre.id)}>{genre.name}</NavDropdown.Item>
          )
        })}
        </NavDropdown>
      </Nav>
    )
}
export default Menu;