
// const { MongoClient } = require('mongodb');

// const dbName = 'share_prompt';

// async function guestLogin() {
//   const client = new MongoClient(MONGODB_URI);

//   try {
//     await client.connect();
//     const db = client.db(dbName);
//     const guestUser = await db.command({ connectionStatus: 1, user: 'guest', roles: [] });
//     console.log('Guest login successful:', guestUser);
//   } catch (err) {
//     console.error('Error occurred during guest login:', err);
//   } finally {
//     client.close();
//   }
// }

// module.exports = { guestLogin };