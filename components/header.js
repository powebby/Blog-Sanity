import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="md:text-xl text-base font-bold tracking-tight md:tracking-tighter leading-tight mb-2 md:mt-6 mt-4 flex justify-end">
      <Link href="/" className="hover:underline">
        Main Board
      </Link>
    </h2>
  )
}
