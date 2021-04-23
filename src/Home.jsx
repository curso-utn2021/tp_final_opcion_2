import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>Biblioteca</h1>
        <main>
          <div>
            <Link to="/Personas"><span class="material-icons">person_add_alt</span></Link>
          </div>
          <div>
            <Link to="/Libros"><span class="material-icons">menu_book</span></Link>
          </div>
          <div>
            <Link to="/Categorias"><span class="material-icons">category</span></Link>
          </div>
        </main>
      
    </div>
  );
}

export default Home;
