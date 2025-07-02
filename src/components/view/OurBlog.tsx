import Image from "next/image";

export default function OurBlog() {
  return (
    <div className="container text-center">
      <h2 className="sub-heading mb-2">READ FROM OUR BLOG</h2>
      <div className="flex justify-center items-center gap-4 my-4">
        <div className="h-px w-24 bg-[#B98B5C]" />
        <Image
          src="/assets/coffee_Bean.png"
          alt="Coffee Bean"
          width={24}
          height={24}
        />
        <div className="h-px w-24 bg-[#B98B5C]" />
      </div>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Dive into the world of coffee with our blog, where we share brewing
        tips, industry insights, and stories behind every cup.
      </p>
    </div>
  );
}
