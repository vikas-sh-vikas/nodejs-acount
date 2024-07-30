import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from '@/components/UI/input';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Layout from "@/components/UI/layout";


type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const defaultValues: Inputs = {
    email: "",
    password: "",
  };
  const router = useRouter()
  const validationSchema = yup.object({
    email: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    mode: "all",
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    router.push('/dashboard/profile')
    // try {
    //   const response = await fetch("http://localhost:3000/api/users/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    // } catch (error) {
    //   console.error("An error occurred during login", error);
    // }
  };

  return (
    <div className="flex justify-center m-auto min-h-screen bg-indigo-100">
      <form
        className="m-auto w-1/2 bg-white rounded-2xl p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-bold text-center p-5 text-gray-500">Login</h1>
        <div className="flex flex-col p-4">
          <label className="text-xl pb-2 text-gray-500">Email or Username</label>
          <Input
            className="p-2 text-xl border-solid border-2 bg-white border-indigo-100"
            placeholder="Enter Email"
            error= {errors.email?.message}
            name="email"
            register={register}
            type="text"
          ></Input>
        </div>
        <div className="flex flex-col p-4">
          <label className="text-xl pb-2 text-gray-500">Password</label>
          <Input
            className="p-2 text-xl border-solid border-2 border-indigo-100"
            placeholder="Enter Password"
            error= {errors.password?.message}
            name="password"
            register={register}
            type="password"
          >
          </Input>
        </div>
        <div className="text-center">
          <button type="submit" className="p-3 bg-blue-600 text-white font-semibold rounded-lg">
            Submit
          </button>
           </div>
      </form>
    </div>
  );
}

// Login.getLayout = Layout;
