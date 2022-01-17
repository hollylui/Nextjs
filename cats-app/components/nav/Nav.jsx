import Link from "next/link";

export const Nav = () => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <Link href="/" class="navbar-brand mb-0 h1">
          Navbar
        </Link>
      </div>
    </nav>
  );
};
