import { useApi } from '../../hooks/useApi';
import { homeApi } from '../../api/homeApi';
import SectionHeading from '../SectionHeading';
import BlogImg1 from '../../assets/images/blog section image.jpg';
import { BlogShimmer } from '../skeletons/BlogShimmer';

export default function BlogSection() {
  const { data, loading, error } = useApi(homeApi.getBlogs);

  // ✅ transform API → UI
  const blogs = data.map((item) => ({
    id: item.id,
    title: item.TITLE,
    desc: item.DESCRIPTION,
    img: item.SERVICE_IMG,
  }));

  // ✅ loading
  if (loading) return <BlogShimmer />;

  // ✅ error
  if (error) return <p className="p-10">Something went wrong</p>;

  return (
    <section className="py-20 px-6 md:px-12 bg-white" id="blogs">
      {/* Heading */}
      <SectionHeading
        label="News and Blogs"
        title={
          <>
            Powering a Sustainable
            <br />
            Future for India
          </>
        }
        underline
        underlineClassName="right-8 bottom-14 w-60"
        align="left"
      />

      {/* Blog Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="group transition duration-300 hover:-translate-y-1">
            <div className="relative">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-none">
                <img
                  src={blog.img || BlogImg1}
                  alt={blog.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = BlogImg1;
                  }}
                  className="h-[260px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* White Curve */}
              <div className="absolute bottom-[25px] right-[25px] w-[80px] h-[80px] bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>

              {/* Button */}
              <div className="absolute bottom-[25px] right-[25px] translate-x-1/2 translate-y-1/2 z-10">
                <div className="bg-brandGreen w-14 h-14 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-green-700 transition-colors">
                  <div className="w-11 h-11 bg-brandGreen rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 17L17 7M17 7H9M17 7V15"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-5">
              <h3 className="mt-5 text-2xl font-semibold leading-[1.2]">
                {blog.title}
              </h3>

              <p className="text-[14px] text-gray-500 mt-2 leading-[1.6]">
                {blog.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Progress Line */}
      <div className="mt-12 w-1/2 m-auto">
        <div className="w-full h-[3px] bg-gray-200 relative rounded-full">
          <div className="absolute left-0 top-0 h-full w-[33%] bg-brandGreen rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
