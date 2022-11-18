import PostPreview from '../components/post-preview'

export default function HomeStories({ posts }) {
  return (
    <section>
      <h2 className="md:mb-8 mb-4 md:text-6xl text-3xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-y-32 md:mb-16 mb-8">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            category={post.category}
          />
        ))}
      </div>
    </section>
  )
}
