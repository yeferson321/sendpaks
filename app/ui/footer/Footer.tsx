import Link from "next/link";

type Props = {
  className?: React.HTMLAttributes<HTMLSpanElement>['className'];
};

export default function Footer({ className }: Props) {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className={`${className}`}>
      <ul className="flex justify-evenly text-xs font-medium text-neutral-500 dark:text-neutral-300">
        <li>
          <Link href="about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link href="privacy" className="hover:underline">Privacy Policy</Link>
        </li>
        <li>
          <Link href="terms" className="hover:underline">Terms</Link>
        </li>
      </ul>
      <span className="block mt-3 text-center text-xs font-medium text-neutral-500 dark:text-neutral-300">© {getCurrentYear()} <a href="https://onlypaks.com/" className="hover:underline">OnlyPaks™</a>. All Rights Reserved.
      </span>
    </footer>

  )
};