import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from '@/components/UI/input';
import { useRouter } from 'next/router'


type Inputs = {
  email: string;
  username: string;
  fullName: string;
  password: string;
  avatar?: string;
  coverImage?: string;
};

export default function Login() {
  const defaultValues: Inputs = {
    email: "",
    username: "",
    fullName: "",
    password: "",
  };
  const router = useRouter()
  const validationSchema = yup.object({
    email: yup.string().required("email is required"),
    username: yup.string().required("Username is required"),
    fullName: yup.string().required("fullname is required"),
    password: yup.string().required("password is required"),
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

    console.log("Data",data)
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("username", data.username);
    formData.append("fullName", data.fullName);
    formData.append("password", data.password);

    if (data.avatar && data.avatar[0]) {
      formData.append("avatar", data.avatar[0]);
    }

    if (data.coverImage && data.coverImage[0]) {
      formData.append("coverImage", data.coverImage[0]);
    }
    try {
      const response = await fetch("http://localhost:8000/api/users/register", {
        method: "POST",
        body: formData,
      });
      router.push("login")
    } catch (error) {
      console.error("An error occurred during login", error);
    }
  };

  return (
    <div className="flex justify-center m-auto min-h-screen bg-indigo-100">
      <form
        className="m-auto w-1/2 bg-white rounded-2xl p-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-bold text-center p-5 text-gray-500">Register</h1>
        <div className="flex flex-col p-4">
          <label className="text-xl pb-2 text-gray-500">Email</label>
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
          <label className="text-xl pb-2 text-gray-500">Username</label>
          <Input
            className="p-2 text-xl border-solid border-2 border-indigo-100"
            placeholder="Enter Username"
            error= {errors.username?.message}
            name="username"
            register={register}
            type="text"
          >
          </Input>
        </div>
        <div className="flex flex-col p-4">
          <label className="text-xl pb-2 text-gray-500">Full Name</label>
          <Input
            className="p-2 text-xl border-solid border-2 border-indigo-100"
            placeholder="Enter Full Name"
            error= {errors.fullName?.message}
            name="fullName"
            register={register}
            type="text"
          >
          </Input>
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
        <div className="flex flex-col p-4">
          <label className="text-xl pb-2 text-gray-500">Avatar</label>
          <input {...register("avatar")} type="file"/>          
        </div>
        <div className="flex flex-col p-4">
          <label className="text-xl pb-2 text-gray-500">Cover</label>
          <input {...register("coverImage")} type="file"/>          
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
