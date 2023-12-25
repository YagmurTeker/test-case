const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Statik dosyaları sunmak için 'public' klasörünü kullanıyoruz
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// İletişim sayfası
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
