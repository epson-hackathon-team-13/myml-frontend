import CustomFormField from "@/components/molecules/custom-form-filed";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useLoggedIn from "@/hook/auth/use-logged-in";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { form, onSubmit } = useLoggedIn();
  const router = useRouter();
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
            <div className="flex flex-col gap-1">
              <Button
                onClick={() => router.push("/sign-up")}
                className="underline ml-auto"
                variant={"link"}
              >
                Sign up
              </Button>
              <Button className="">Login</Button>
            </div>
          </form>
          <div></div>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
