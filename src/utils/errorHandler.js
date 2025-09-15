function notFoundHandler(req, res) {
  res.status(404).json({
    status: 'error',
    message: 'Endpoint not found',
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString(),
  });
}

// Ensure consistent error payloads
// eslint-disable-next-line no-unused-vars
function globalErrorHandler(err, req, res, next) {
  console.error('Unhandled Error:', err);
  const status = err.status || 500;
  res.status(status).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
    timestamp: new Date().toISOString(),
  });
}

module.exports = { notFoundHandler, globalErrorHandler };
