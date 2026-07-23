const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for all routes (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🌌 Solar System Explorer running at http://localhost:${PORT}`);
    console.log(`📁 Place texture files in: public/textures/`);
    console.log(`🖼️  Download textures from: https://www.solarsystemscope.com/textures/`);
});
