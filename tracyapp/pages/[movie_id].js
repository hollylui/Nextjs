import "tailwindcss/tailwind.css";
import Head from "next/head";

export default function MovieDetail({ movie }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {movie && (
        <>
          <div className="container mx-auto">
            <h1 className="text-5xl">Movie Details For: {movie.title}</h1>
          </div>
          <div className="container mx-auto">
            <div className="flex flex-wrap my-16">
              <img src={movie.poster} alt={movie.title} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: ["/573a13b8f29313caabd4bcb5"], //we can call the data from MogoDB and put them into the paths and build the page
    fallback: false, //true: if the page is already static, go to run getStaticProps
  };
}

// false: need to input information in the paths
//true: no need to

export async function getStaticProps({ params }) {
  try {
    const data = await fetch(
      `http://localhost:3000/api/moviedetail?movie_id=${params.movie_id}`
    );
    const movie = await data.json();

    return {
      props: { movie },
      revalidate: 1, //how often to check the new data on the application, in sec
    };
  } catch (e) {
    console.log(e);
  }
}

// export async function getServerSideProps(context) {
//   try {
//     const data = await fetch(
//       `http://localhost:3000/api/moviedetail?movie_id=${context.query.movie_id}`
//     );
//     const movie = await data.json();

//     return {
//       props: { movie },
//     };
//   } catch (e) {
//     console.error(e);
//     return {
//       props: { isConnected: false },
//     };
//   }
// }
