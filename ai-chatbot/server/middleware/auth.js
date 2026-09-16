/**
 * Context middleware for portfolio chatbot.
 * Allows anonymous visitors (recruiters, developers, hiring managers)
 * while assigning a guest context.
 */
function attachContext(req, res, next) {
  const authHeader = req.headers.authorization || null;
  const visitorId = req.headers['x-visitor-id'] || req.headers['x-employee-id'] || 'guest_visitor';

  req.ctx = {
    authHeader,
    visitorId,
    timestamp: Date.now(),
  };
  next();
}

module.exports = { attachContext };
