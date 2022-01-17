import "tailwindcss/tailwind.css";
import Head from "next/head";
import clientPromise from "../lib/mongodb";

export default function Movies({ movies }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <h1 className="text-5xl">This is the movies page</h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap my-16">
          {movies &&
            movies.map((movie) => (
              <div key={movie._id} className="w-1/4 p-16 border border-black">
                <h2>{movie.title}</h2>
                <p>Release date: {movie.year}</p>
                <p>IMDB Rating: {movie.imdb.rating}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const data = await db
      .collection("movies")
      .find({ year: 2013, "imdb.rating": { $gt: 7.5 } }) //$gt: greater than
      .limit(20)
      .toArray();
    const movies = JSON.parse(JSON.stringify(data));
    return {
      props: { movies },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
