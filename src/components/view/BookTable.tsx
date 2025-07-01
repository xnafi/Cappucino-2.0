"use client";

import InputField from "@/utils/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import Bean from "../../../public/assets/coffee_Bean.png";
import Image from "next/image";
import Button from "../buttons/Button";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  requests: string;
}

export default function BookTableForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <section className="container mx-auto text-center">
      <h2 className="sub-heading mb-2">Book Your Table</h2>
      <div className="w-full lg:w-[40%] mx-auto flex justify-center items-center my-4">
        <div className="h-px bg-[#B98B5C] w-[30%]" />
        <Image src={Bean} alt="coffee bean" />
        <div className="h-px bg-[#B98B5C] w-[30%]" />
      </div>
      <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
        Ready to enjoy a memorable dining experience? Reserve your table today
        and secure your spot.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left"
      >
        <InputField
          label="Name"
          placeholder="Jhon Mark"
          register={register("name", { required: "Name is required" })}
          error={errors.name}
        />
        <InputField
          label="Email"
          type="email"
          placeholder="Jhonmark@gmail.com"
          register={register("email", { required: "Email is required" })}
          error={errors.email}
        />
        <InputField
          label="Phone Number"
          type="tel"
          placeholder="-880-524-257"
          register={register("phone", { required: "Phone number is required" })}
          error={errors.phone}
        />
        <InputField
          label="Date"
          type="date"
          register={register("date", { required: "Date is required" })}
          error={errors.date}
        />
        <InputField
          label="Time"
          type="time"
          register={register("time", { required: "Time is required" })}
          error={errors.time}
        />
        <InputField
          label="Number of Guests"
          type="number"
          placeholder="5"
          register={register("guests", {
            required: "Number of guests is required",
            min: 1,
          })}
          error={errors.guests}
        />

        <div className="md:col-span-3">
          <label className="block text-sm font-semibold text-black mb-1">
            Special Requests
          </label>
          <textarea
            placeholder="Write your Requests"
            {...register("requests")}
            className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none text-black placeholder:text-black w-full h-32"
          />
        </div>

        <div className="md:col-span-3 text-center mx-auto">
          <Button variant="solid">{"RESERVE NOW"}</Button>
        </div>
      </form>
    </section>
  );
}
