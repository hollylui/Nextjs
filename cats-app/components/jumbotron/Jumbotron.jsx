import { useRouter } from "next/router";

export default function Jumbotron() {
  const router = useRouter();

  return (
    <div class="jumbotron jumbotron-fluid mt-5">
      <div class="container">
        <h1 class="display-4">Cats World</h1>
        <p class="lead">
          Find your new best friend today. Adopt a wonderful cat.
        </p>
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => router.push("/cats")}
        >
          Start looking
        </button>
      </div>
    </div>
  );
}
