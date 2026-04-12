import { useApi } from '../../hooks/useApi';
import { homeApi } from '../../api/homeApi';
import SectionHeading from '../elements/SectionHeading';
import BlogImg1 from '../../assets/images/blog-section-image.jpg';
import { BlogShimmer } from '../skeletons/BlogShimmer';

export default function BlogSection() {
  const { data, loading, error } = useApi(homeApi.getBlogs);

  if (loading) return <BlogShimmer />;
  if (error) return <p className="p-10">Something went wrong</p>;

  const blogs = (data ?? []).map((item) => ({
    id: item.id,
    title: item.TITLE,
    desc: item.DESCRIPTION,
    img: item.SERVICE_IMG,
  }));

  return (
    <section className="my-8 md:my-14 bg-white" id="blogs">
      <div className="wrapper">
        {/* Heading */}
        <SectionHeading
          label="News and Blogs"
          title={
            <>
              Powering a Sustainable
              <br className="hidden lg:block" />
              Future for India
            </>
          }
          underline
          underlineClassName="right-4 md:right-8 bottom-10 md:bottom-14 w-40 md:w-60 hidden lg:block"
          align="left"
        />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12 max-w-6xl mx-auto">
          {blogs.map(({ id, title, desc, img }) => (
            <article
              key={id}
              className="group transition duration-300 hover:-translate-y-1">
              {/* Image Section */}
              <div className="relative">
                <div className="overflow-hidden rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-none">
                  <img
                    src={img || BlogImg1}
                    alt={title}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = BlogImg1;
                    }}
                    className="h-[200px] sm:h-[240px] md:h-[260px] w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Decorative Circle */}
                <div className="absolute bottom-4 right-4 md:bottom-[25px] md:right-[25px] w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-full translate-x-1/2 translate-y-1/2" />

                {/* Action Button */}
                <div className="absolute bottom-4 right-4 md:bottom-[25px] md:right-[25px] translate-x-1/2 translate-y-1/2 z-10">
                  <div className="bg-brandGreen w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full shadow-lg cursor-pointer hover:bg-green-700 transition-colors">
                    <div className="w-9 h-9 md:w-11 md:h-11 bg-brandGreen rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 md:w-5 md:h-5 text-white"
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
              <div className="px-2 sm:px-4 md:px-5">
                <h3 className="mt-4 md:mt-5 text-lg md:text-2xl font-semibold leading-[1.2]">
                  {title}
                </h3>

                <p className="text-xs md:text-[14px] text-gray-500 mt-2 leading-[1.6]">
                  {desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-10 md:mt-12 w-full md:w-1/2 mx-auto px-4 md:px-0">
          <div className="w-full h-[3px] bg-gray-200 relative rounded-full">
            <div className="absolute left-0 top-0 h-full w-[33%] bg-brandGreen rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
