import CustomFormField from "@/components/molecules/custom-form-filed";
import { LoadIcon } from "@/components/molecules/loading";
import { Form } from "@/components/ui/form";
import useAddEmail from "@/hook/epson/use-add-email";

type ModalProps = {
  onClickClose: () => void;
};

const EmailModal: React.FC<ModalProps> = ({ onClickClose }) => {
  const { form, onSubmit, loading } = useAddEmail();
  return (
    <div className="fixed left-0 right-0 top-0 flex h-screen z-[9999] items-center justify-center bg-black bg-opacity-20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="bg-white rounded-[12px] min-w-[280px] max-w-[320px]">
            <div className="p-6 flex flex-col gap-3 justify-center items-center">
              <p className="text-center">Please enter Epson Connect email.</p>
              <div className="w-full">
                <CustomFormField
                  formAttr={{ control: form.control, name: "username" }}
                  labelAttr={{
                    type: "",
                    formType: "DEFAULT",
                    labelText: "",
                    placeholder: "you@example.com",
                    isEssential: true,
                  }}
                />
              </div>
            </div>
            {loading && (
              <div>
                <div className="relative z-10">
                  <LoadIcon />
                </div>
                <div className=" absolute top-0 bottom-0 left-0 right-0 bg-black/20"></div>
              </div>
            )}
            <div className="flex border-t">
              <button
                onClick={onClickClose}
                className="body1-16-r border-r w-full py-[13px] border-black/10 text-black/50"
              >
                Cancel
              </button>
              <button
                // onClick={onClickButton}
                className="body1-16-b w-full py-[13px] border-black/10 text-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EmailModal;
