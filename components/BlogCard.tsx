import Link from 'next/link';

interface BlogCardProps {
  title: string;
  image: string;
  slug: string;
  description: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image, slug, description }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
      <img src={image} alt={title} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
        <Link href={`/blog/${slug}`}>
          <a className="m-2 inline-block text-purple-500 hover:text-purple-700">Read More</a>
        </Link>
      </div>
    </div>
  </div>
);

export default BlogCard;
