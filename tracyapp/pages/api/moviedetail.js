// the link: http://localhost:3000/api/moviedetail?movie_id=573a13b8f29313caabd4bcb5

import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  const query = req.query.movie_id;
  const client = await clientPromise;
  const db = client.db("sample_mflix");

  const data = await db
    .collection("movies")
    .findOne({ _id: new ObjectId(query) });

  return res.json(data);
}
