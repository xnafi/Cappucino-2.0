'use client'
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { IoLogoGoogle } from "react-icons/io";
import InputField from "@/utils/InputField";
import Button from "@/components/buttons/Button";
import Link from "next/link";

interface SignInInputs {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: SignInInputs) => {
    console.log("Sign in data:", data);
  };

  return (
    <section className="container flex justify-center items-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <h2 className="text-xl font-medium text-center mb-1">Home /{' Sign in'}</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Want to know more? We are here.
        </p>

        {/* Google Login */}
        <button className="w-full border border-gray-300 py-2 px-4 rounded flex items-center justify-center gap-2 text-sm mb-4 hover:shadow">
          <IoLogoGoogle className="w-5 h-5" />
          Login with Google
        </button>

        <div className="text-center text-gray-400 text-sm mb-4">or</div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <InputField
            label="Email *"
            type="email"
            placeholder="Enter your email"
            register={register("email", { required: "Email is required" })}
            error={errors.email}
            className=""
          />

          {/* Password */}
          <div className="relative">
            <InputField
              label="Password *"
              type={showPassword ? "text" : "password"}
              placeholder="********"
              register={register("password", {
                required: "Password is required",
              })}
              error={errors.password}
              className="pr-10"
            />
            <div
              className="absolute right-3 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#B27A4C] hover:bg-[#9c663d] text-white text-sm py-2 rounded transition"
          >
           {' Sign in'}
          </Button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Don’t have an account yet?{" "}
            <Link href="/sign-up" className="text-[#B27A4C] font-medium hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
