
## REACT DEBUTANTE

``` Installer Dependances
npm install


``` Creation react  
node -v
npm -v

npm create vite@latest mon-projet

```Lancer Project React 
npm run dev


```Creer Backend Node 
node -v
npm -v
npm init -y

```Executiond e index.js
node index.js


```Installer dependances 
npm install express
Express : c'est  le coeur de node (req , res)
npm install CORS 
Cors : Pour communiuqer les deux ports differents (A mon Avis)


```Utilisation de Onclick :
<button onClick={direBonjour}>
  Cliquer
</button>


```Utilisation de OnChange :
<button onChange={(e) =>console.log("e.target.value")}>
  Cliquer
</button>


```Sur React on utise : au lieu de else  :
 happy ? 1 : 0


```UseEffect
Hooks : Listner
useEffect(func(),[variable]) : Rehefa manova variable de mrecharge ilay function
UseState : 

 Hooks (comme listner): UseEffect , UseState 

 afficher image via Json
 <img src={personne.image} alt={personne.nom} width={100} />



 on installe le animatecss (Pour faire Animation) ,  
 npm install animate.css @fortawesome/fontawesome-free

 on installe Router pour React :
npm install react-router-dom



Pour utiliser Postgres sur node on doit faire ceci :
  npm install pg 

```Creation de connexion :

const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "testdb",
    password: "1234",
    port: 5432
}); 

module.exports = pool;



## Manage_store 
select pav.boolean_value,p.sku FROM dbproduct_attribute_values pav JOIN dbproducts p ON p.id = pav.product_id WHERE pav.attribute_id = (SELECT id from dbattributes WHERE code = 'manage_stock');


## UPDATE ho true 
UPDATE dbproduct_attribute_values SET boolean_value = 1 WHERE attribute_id = (SELECT id from dbattributes WHERE code ='manage_stock');



## UseEffect , Pour Assigner UseEffect
UseEffect(() => {

} , ([]))

## Function avec async 
const nomFunction = async (Parametre) =>{

};

## Utilisation de map 
  const noms = ["Jean", "Marie", "Paul"];
  const resultat = noms.map((nom) => {
    return "Bonjour " + nom;
});

console.log(resultat);

## Map() sur le div 


## utilisation avec method 
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: "test" })
});


## let : mety miova
   const : tsy miova mihintsy 
   