const { translate } = require('bing-translate-api');

async function engToFr(reqData) {
  try {
    const res = await translate(reqData, 'en', 'fr');
    return res.translation;
  } catch (err) {
    console.error(err);
    throw err; 
  }
}

module.exports = {
  engToFr,
};
