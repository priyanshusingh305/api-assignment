const translateService = require("../services/translation.service");

const translateToFrench = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: 'Text to translate is required' });
    }
    
    const translation = await translateService.engToFr(text);
    return res.status(201).json({ translation });
  } catch (error) {
    console.error('Error during translation:', error);
    return res.status(500).json({ error: 'Failed to translate text' });
  }
};

module.exports = {
  translateToFrench,
};
