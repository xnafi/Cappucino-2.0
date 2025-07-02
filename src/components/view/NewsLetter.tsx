"use client";
import InputField from "@/utils/InputField";
import { useForm } from "react-hook-form";
import Button from "../buttons/Button";

type NewsletterForm = {
  email: string;
};

const Newsletter = () => {
  const {
    register,
    handleSubmit,
  } = useForm<NewsletterForm>();
  const onSubmit = (data: NewsletterForm) => {
    console.log("Newsletter Signup:", data);
  };

  return (
    <section className="bg-[#004443] text-white text-center container rounded-xl mb-7 mt-5">
      <h2 className="text-2xl font-semibold">Subscribe to our newsletter.</h2>
      <p className="text-sm max-w-xl mx-auto mt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 flex justify-center items-center gap-4 max-w-lg mx-auto"
      >
        <InputField
          type="email"
          placeholder="Enter your email"
          className="bg-white w-full"
          register={register("email", { required: "Email is required" })}
        />
        <Button variant="solid">{"SUBSCRIBE"}</Button>
      </form>
    </section>
  );
};

export default Newsletter;
