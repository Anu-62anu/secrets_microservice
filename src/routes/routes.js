const { Router } = require('express');
const { getCoreConfig, getRuntimeFlags } = require('../service/configService');

const router = Router();

// Health root
router.get('/', (req, res) => {
  res.json({
    status: 'healthy',
    service: 'Looker SDK Microservice',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// Config check (return the 3 variables)
router.get('/config', (req, res) => {
  const cfg = getCoreConfig();
  res.json({
    status: 'success',
    message: 'Configuration loaded successfully',
    ...cfg,
    timestamp: new Date().toISOString(),
  });
});

// Test endpoint
router.get('/test', (req, res) => {
  res.json({
    status: 'success',
    message: 'Test endpoint working',
    environment: {
      NODE_ENV: process.env.NODE_ENV,
      PORT: process.env.PORT,
      GOOGLE_CLOUD_PROJECT:
        process.env.GOOGLE_CLOUD_PROJECT || process.env.GCLOUD_PROJECT || null,
    },
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
