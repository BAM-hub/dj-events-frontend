const { events } = require('./data.json');

export default function handler(req, res) {
  if(req.method === 'GET')
    return res.status(200).json(events);
  res.setHeader('Allow', ['GET']);
  res.status(405).json({message: `method ${req.method} is not allowed`}); 
}
