import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, LoginValues } from "@/schema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { SiThunderbird } from "react-icons/si";
import { useLogin } from "@/api/auth";
import { Loader2 } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { control, handleSubmit } = form;

  const { mutate, isPending } = useLogin();

  const onSubmit = (data: LoginValues) => {
    mutate(data);
  };
  return (
    <div cl>
      <div className="flex items-center justify-between px-12 py-4 border-b border-purple-200">
        <div className="flex items-center gap-3">
          <SiThunderbird className="text-3xl text-purple-800" />
          <p className="text-sm font-bold text-purple-800">SMART POULTRY</p>
        </div>

        <Button variant="ghost">Switch to Admin</Button>
      </div>

      <div className="flex items-center justify-center h-[90vh] bg-gray-100">
        <div className="px-4 py-8 border border-purple-300 w-[400px] rounded-xl">
          <h1 className="text-xl font-semibold text-purple-800 mb-7">
            Smart Poultry Staff Login
          </h1>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage className="text-xs font-normal capitalize" />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your email"
                          {...field}
                        />
                        <div onClick={() => setShowPassword(!showPassword)}>
                          {showPassword ? (
                            <IoMdEye className="absolute -translate-y-1/2 top-1/2 right-4" />
                          ) : (
                            <IoMdEyeOff className="absolute -translate-y-1/2 top-1/2 right-4" />
                          )}
                        </div>
                      </div>
                    </FormControl>

                    <FormMessage className="text-xs font-normal capitalize" />
                  </FormItem>
                )}
              />
              <Button
                disabled={isPending}
                className="w-full"
                variant="primary"
                type="submit"
              >
                {isPending ? (
                  <Loader2 className="text-xl text-white animate-spin" />
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
