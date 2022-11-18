import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}) {
  return (
    <section className="grid md:grid-cols-3 grid-cols-1 gap-10 md:mb-16 mb-12">
      <div className="md:col-span-2">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="col-span-1 md:pt-8">
        <div>
          <h4 className="mb-0 text-base font-semibold text-blue-400">
            {category && category.title}
          </h4>
          <h3 className="md:mb-4 mb-2 md:text-4xl text-2xl font-bold leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-0 md:text-lg text-base font-semibold">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="md:mb-6 mb-2 md:text-base text-sm leading-relaxed">{excerpt}</p>
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
      </div>
    </section>
  );
}
