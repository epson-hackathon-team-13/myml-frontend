import CustomFormField from "@/components/molecules/custom-form-filed";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useLoggedIn from "@/hook/auth/use-logged-in";
import useSignUp from "@/hook/auth/use-sign-up";
import { useEffect } from "react";

const SignUpForm = () => {
  const { form, onSubmit } = useSignUp();

  useEffect(() => {
    form.setValue("language", "en");
    form.setValue("level", 1);
  }, []);

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
            <CustomFormField
              formAttr={{ control: form.control, name: "nickname" }}
              labelAttr={{
                formType: "DEFAULT",
                labelText: "nickname",
                placeholder: "Enter your Korean nickname.",
                isEssential: true,
              }}
            />
            <CustomFormField
              formAttr={{ control: form.control, name: "username" }}
              labelAttr={{
                formType: "DEFAULT",
                labelText: "name",
                placeholder: "Enter your name",
                isEssential: true,
              }}
            />
            {/* <CustomFormField
              formAttr={{ control: form.control, name: "language" }}
              labelAttr={{
                formType: "DEFAULT",
                labelText: "language",
                placeholder: "e.g) en",
                isEssential: true,
              }}
            />
            <CustomFormField
              formAttr={{ control: form.control, name: "level" }}
              labelAttr={{
                type: "number",
                formType: "DEFAULT",
                labelText: "level",
                placeholder: "Enter 4 Character or more",
                isEssential: true,
              }}
            /> */}
            <Button className="mt-4">sign up</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
