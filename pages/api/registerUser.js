import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://junmun_chan1:TSS123456@cluster0.kwhwc.mongodb.net/medTechDB?retryWrites=true&w=majority');
    const db = client.db();

    const userCollection = db.collection('userList');
    const result = await userCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({message: 'User inserted'});
  }
}

export default handler;