// ============================================================
// SkyFare — Express Server for Render.com
// Built by Pragyan Kumar Pattnaik
// ============================================================

const express = require('express');
const path    = require('path');
const cors    = require('cors');

const RAPIDAPI_KEY   = '3ef7c29a9emsh73fff5b9380d93cp1eede0jsn75df546ae23a';
const EXCHANGE_KEY   = '1e2e7649548d890e600046eb';
const GROQ_KEY       = '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';
const RAZORPAY_KEY   = 'rzp_test_SzprurEoV2vn01';

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for all routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n✈  SkyFare server running on port ${PORT}`);
  console.log(`🌐 Open: http://localhost:${PORT}\n`);
});
