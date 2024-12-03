import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { cn } from "../utils/cn";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "./CategoryLabel";

const Postlist = ({
    post,
    aspect,
    minimal,
    pathPrefix,
    fontSize,
    fontWeight
}) => {

    const imageProps = post?.mainImage
    ? post.mainImage
    : null;
  return (
    <>
      <div
        className={cn(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2"
        )}>
        <div
          className={cn(
            " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
          )}>
          <Link
            className={cn(
              "relative block",
              aspect === "landscape"
                ? "aspect-video"
                : aspect === "custom"
                ? "aspect-[5/4]"
                : "aspect-square"
            )}
            to={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
              post.slug
            }`}>
            {imageProps ? (
              <img
                src={imageProps.src}
                {...(post.mainImage.blurDataURL && {
                  placeholder: "blur",
                  blurDataURL: post.mainImage.blurDataURL
                })}
                alt={post.mainImage.alt || "Thumbnail"}
                className="object-cover transition-all"
                sizes="(max-width: 768px) 30vw, 33vw"
              />
            ) : (
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <PhotoIcon />
              </span>
            )}
          </Link>
        </div>

        <div className={cn(minimal && "flex items-center")}>
          <div>
            <CategoryLabel
              categories={post.categories}
              nomargin={minimal}
            />
            <h2
              className={cn(
                fontSize === "large"
                  ? "text-2xl"
                  : minimal
                  ? "text-3xl"
                  : "text-lg",
                fontWeight === "normal"
                  ? "line-clamp-2 font-medium  tracking-normal text-black"
                  : "font-semibold leading-snug tracking-tight",
                "mt-2    dark:text-white"
              )}>
              <Link
                to={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                  post.slug
                }`}>
                <span
                  className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-purple-800 dark:to-purple-900">
                  {post.title}
                </span>
              </Link>
            </h2>

            <div className="hidden">
              {post.excerpt && (
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                  <Link
                    to={`/post/${
                      pathPrefix ? `${pathPrefix}/` : ""
                    }${post.slug}`}>
                    {post.excerpt}
                  </Link>
                </p>
              )}
            </div>

            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <Link to={`/author/${post?.author?.slug?.current}`}>
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    {post?.author?.image && (
                      <img
                        src={"https://via.placeholder.com/150"}
                        alt={post?.author?.name}
                        className="rounded-full object-cover"
                        sizes="20px"
                      />
                    )}
                  </div>
                  <span className="truncate text-sm">
                    {post?.author?.name} {post?.author?.surname}
                  </span>
                </div>
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                &bull;
              </span>
              <time
                className="truncate text-sm"
                dateTime={post?.created_at || post._createdAt}>
                {format(
                  parseISO(post?.created_at || post._createdAt),
                  "MMMM dd, yyyy"
                )}
              </time>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Postlist.propTypes = {
    post: PropTypes.array,
    aspect: PropTypes.any,
    minimal: PropTypes.any,
    pathPrefix: PropTypes.any,
    preloadImage: PropTypes.any,
    fontSize: PropTypes.any,
    fontWeight: PropTypes.any
}

export default Postlist