import './App.css'; 

function Obsah() {
    return (
        <><h1>Název obchodu</h1><> 
        <div class="pocty"> 
            <div class="input"><label for="name">Počet kusů tužka:</label><input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10"/><label for="name">Počet kusů pero:</label><input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10"/>
            </div><button class="tlacitko1" type="button">odebrat</button>
            </div></></>
    );
}

export default Obsah;