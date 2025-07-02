"use client";
import InputField from "@/utils/InputField";
import { useForm } from "react-hook-form";
import Button from "../buttons/Button";
import { ContactFormFields } from "@/types/AllTypes";



export const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormFields>();
  const onSubmit = (data: ContactFormFields) => {
    console.log("Contact form submitted:", data);
  };

  return (
    <section className="container flex justify-center w-full">
      <div className="w-full">
        <h3 className="sub-heading text-black mb-6">
          Have a question? Get in touch.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-left text-sm text-[#432818] space-y-4">
            <div>
              <strong>Email Address</strong>
              <br />
              cappuccion@gmail.com
            </div>
            <div>
              <strong>Call Us</strong>
              <br />
              +012-542-548-782
            </div>
            <div>
              <strong>Our Address</strong>
              <br />
              2850 N College Ave, Arkansas.
            </div>
          </div>
        </div>
      </div>
      {/* form section */}
      <div className="w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <InputField
            placeholder="First Name"
            register={register("firstName", {
              required: "First name is required",
            })}
            error={errors.firstName}
          />
          <InputField
            placeholder="Last Name"
            register={register("lastName", {
              required: "Last name is required",
            })}
            error={errors.lastName}
          />
          <InputField
            placeholder="Email"
            register={register("email", { required: "Email is required" })}
            error={errors.email}
          />
          <InputField
            placeholder="Subject"
            register={register("subject", {
              required: "Subject is required",
            })}
            error={errors.subject}
          />
          <div className="md:col-span-2">
            <textarea
              placeholder="Write your message"
              {...register("message", { required: "Message is required" })}
              className="w-full h-32 p-3 text-sm border border-gray-300 rounded text-black placeholder:text-black"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="md:col-span-2">
            <Button variant="solid">{"  SUBMIT NOW"}</Button>
          </div>
        </form>
      </div>
    </section>
  );
};
