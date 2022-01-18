import Link from "ui/link";

export default function Layout({ children }) {
  return (
    <div className="container border rounded mx-auto ">
      <header className="flex h-16 bg-blue-50 items-end pb-2 px-6">
        <div className="ml-4">
          <Link href="/">MySite</Link>
        </div>
        <div className="flex-grow mx-6">main menu links</div>
        <div className="mr-4">
          <ul>
            <li>
              <Link href="/users/login">
                <a className="active:bg-green-700">Log in</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="my-16 px-6">{children}</div>
      <footer className="px-6">Footer</footer>
    </div>
  );
}
