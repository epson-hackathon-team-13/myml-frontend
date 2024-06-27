import CustomFormField from "@/components/molecules/custom-form-filed";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import useLoggedIn from "@/hook/auth/use-logged-in";
import { useEffect } from "react";

const LoginForm = () => {
  const { form, onSubmit } = useLoggedIn();

  return (
    <div className="max-w-[600px] h-[calc(100vh-82px)] flex items-center mx-auto">
      <div className="w-full">
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CustomFormField
              formAttr={{ control: form.control, name: "email" }}
              labelAttr={{
                formType: "DEFAULT",
                labelText: "Email",
                placeholder: "you@example.com",
                isEssential: true,
              }}
            />
            <CustomFormField
              formAttr={{ control: form.control, name: "password" }}
              labelAttr={{
                type: "password",
                formType: "DEFAULT",
                labelText: "Password",
                placeholder: "Enter 4 Character or more",
                isEssential: true,
              }}
            />
            <Button className="mt-4">Login</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
