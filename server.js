const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3000;

    app.get('/api/contracts', (req, res) => {
      // Mock data for now
      res.json([{ id: 1, name: 'Contract A' }, { id: 2, name: 'Contract B' }]);
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
