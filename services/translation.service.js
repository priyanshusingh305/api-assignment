const { translate } = require('free-translate');


async function engToFr(reqData){
  const translation = await translate(reqData, { from: 'en', to: 'fr' });
  return translation ;
}

module.exports={
  engToFr,
}