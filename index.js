const axios = require('axios');

exports.handler = async (event) => {

  try {
    const getQuotes = await axios.get('https://api.api-ninjas.com/v1/quotes?category=inspirational', {
      headers: {
        'X-Api-Key': '==eqTolUxlnp5FVDt3' // API KEY for api-ninjas
      }
    })
    const quote = getQuotes.data[0].quote;

    const data = {
      token: 'iffffd', // API KEY FROM ULTRAMSG
      to: '601234567890',
      body: quote,
      priority: '1',
      referenceId: ''
    }

    const response = await axios.post('https://api.ultramsg.com/instance30459/messages/chat', data);
    return {
      'body': quote,
      'headers': {
        'Content-Type': 'text/plain'
      },
      'statusCode': 200
    }
  } catch (error) {
    console.error(error);
    return error;
  }
};
