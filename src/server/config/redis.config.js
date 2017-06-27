import redis from 'redis';

function createClient() {
  const client = redis.createClient(6379, '172.17.0.1');

  client.on('error', (err) => {
    console.log('Error', err);
  });

  return client;
}

export default createClient;
