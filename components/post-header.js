import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  category,
}) {
  return (
    <>
      <h4 className="mb-2 text-lg font-semibold text-blue-400">
        {category && category.title}
      </h4>
      <PostTitle>{title}</PostTitle>
      <div className="flex justify-between mb-4">
          {author && <Avatar name={author.name} picture={author.picture} />}
        <div className="md:text-lg text-base md:mt-3 mt-1">
          <Date dateString={date} />
        </div>
      </div>
      <div className="mb-5 sm:mx-0">
        <CoverImage title={title} image={coverImage} priority />
      </div>
    </>
  );
}
