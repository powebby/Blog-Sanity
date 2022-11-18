import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "./cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  category,
}) {
  return (
    <div>
      <div className="md:mb-5 mb-2">
        <CoverImage slug={slug} title={title} image={coverImage} />
      </div>
      <h4 className="md:text-base text-sm font-semibold text-blue-400">
        {category && category.title}
      </h4>
      <h3 className="md:mb-3 mb-0 md:text-3xl text-xl leading-snug font-bold">
        <Link href={`/posts/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="md:mb-2 mb-0 md:text-lg text-base font-semibold">
        <Date dateString={date} />
      </div>
      <p className="md:mb-4 mb-2 md:text-base text-sm leading-relaxed">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  );
}
