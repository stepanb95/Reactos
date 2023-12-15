import './App.css';
 
function Podstranka() {

 
  return (
    <div className="App">
      <h1>Název obchodu</h1>
 
      <input type="text" placeholder="Název položky" />
      <input type="number" placeholder="Množství" />

 
      <button class="tlacitkos">Hotovo</button>
      <button class="tlacitkos1">Odebrat</button>
    </div>
  );
}
 
export default Podstranka;