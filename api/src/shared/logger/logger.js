// Information logger
export const logInfo = (req, message) => {
  console.log(`METHOD: ${req.method} | URL: ${req.url} | BODY: ${JSON.stringify(req.body)} | MESSAGE: ${JSON.stringify(message)}`);
}

// Errors logger
export const logErrors = (req, error) => {
  console.log(`METHOD: ${req.method} | URL: ${req.url} | BODY: ${JSON.stringify(req.body)} | ERROR: ${JSON.stringify(error)}`);
}