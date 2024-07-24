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
import { signupSchema, SignupValues } from "@/schema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useSignup } from "@/api/auth";
import { Loader2 } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";
import { toast } from "../ui/use-toast";

interface AddStaffProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddStaff({ isOpen, onClose }: AddStaffProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm({
    resolver: yupResolver(signupSchema),
  });

  const { control, handleSubmit } = form;

  const { isPending } = useSignup();

  const onSubmit = async (data: SignupValues) => {
    // mutate(data);

    console.log(data);

    toast({
      title: "Success",
      description: "User created successfully",
      variant: "success",
    });
    onClose();
  };
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <div className="px-4 py-8 rounded-xl">
          <h1 className="text-xl font-semibold text-purple-800 mb-7">
            Smart Poultry Admin Signup
          </h1>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage className="text-xs font-normal capitalize" />
                  </FormItem>
                )}
              />
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
                          placeholder="Enter your password"
                          {...field}
                        />
                        <div
                          className="cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        >
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
              <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Re-enter your password"
                          {...field}
                        />
                        <div
                          className="cursor-pointer"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
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

              <div className="flex items-center justify-end gap-4">
                <Button
                  disabled={isPending}
                  variant="ghost"
                  type="button"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button disabled={isPending} variant="primary" type="submit">
                  {isPending ? (
                    <Loader2 className="text-xl text-white animate-spin" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
