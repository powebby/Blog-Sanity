export default function PostTitle({ children }) {
  return (
    <h1 className="md:text-6xl text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-left">
      {children}
    </h1>
  )
}
