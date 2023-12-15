import './Navbar.css'; 


const Navbar = () => {
  
  return (
    <nav className={`navbar `}>
      <div className="flags">
        <img src="https://www.vlajky.eu/vlajky/846/cz.jpg" alt="Česká vlajka" />
        <img src="https://www.libea.cz/wp-content/uploads/2018/12/Velk%C3%A1-Brit%C3%A1nie.jpg" alt="Britská vlajka" />
      </div>
      <div className="logo">Přehled nákupních seznamů</div>
      <div className="dark-mode">
        <input
          type="checkbox"
          id="dark-mode-switch"
          
        />
        <label htmlFor="dark-mode-switch">Dark mode</label>
      </div>
    </nav>
  );
};
 
export default Navbar;