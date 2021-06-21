import express from 'express';
import vaultDwellers from './routes/vault-dwellers.js'

const app = express();
const PORT = 5000;

//Parsing middleware
app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

//Used by routes/dwellers.js (hooking up routes)
app.use('/dwellers', vaultDwellers);

app.get('/', (req, res) => {
    console.log('App has started.');
    res.send('Welcome to Fallout Shelter!');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));