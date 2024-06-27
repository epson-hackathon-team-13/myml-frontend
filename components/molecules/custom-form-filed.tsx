import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger2,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import Label from "../ui/label";

type CustomFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  formAttr: FormFieldAttr<TFieldValues, TName>;
  labelAttr: LabelAndInputAttr;
  formVariant?: "GRAY";
  formType?: "QUESTION";
};

type LabelAndInputAttr =
  | {
      labelText: string;
      placeholder: string;
      border?: boolean;
      maxLength?: number;
      type?: string;
      formType: "DEFAULT";
      isEssential?: boolean;
      disabled?: boolean;
    }
  | {
      labelText: string;
      placeholder: string;
      border?: boolean;
      maxLength?: number;
      type?: string;
      formType: "CALENDAR";
      isEssential?: boolean;
      disabled?: boolean;
    }
  | {
      labelText: string;
      placeholder: string;
      border?: boolean;
      maxLength?: number;
      formType: "SELECT";
      selectBarSize?: "sm" | "md";
      selectData: {
        value: string | boolean | number;
        text: string;
        id?: string;
      }[];
      isEssential?: boolean;
      radioVertical?: boolean;
      form: UseFormReturn<any>;
    }
  | {
      border?: boolean;
      maxLength?: number;
      formType: "RADIO";
      selectData: { value: string | boolean; text: string }[];
      isEssential?: boolean;
      radioVertical?: boolean;
      defaultValue?: string | boolean;
    };

type FormFieldAttr<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  control: Control<TFieldValues>;
  name: TName;
};

const CustomFormField = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  formAttr,
  labelAttr,
  formVariant,
  formType,
}: CustomFormFieldProps<TFieldValues, TName>) => {
  const [selectValue, setSelectValue] = useState("");

  // select 업데이트
  useEffect(() => {
    if (labelAttr.formType === "SELECT") {
      const value = labelAttr.form.getValues(formAttr.name);
      if (!value) return;
      setSelectValue(value);
      labelAttr.form.setValue(formAttr.name, value);
    }
  }, [formAttr.name, labelAttr]);

  const handleChangeValue = (value: any) => {
    if (!value || labelAttr.formType !== "SELECT") return;
    setSelectValue(value);
    labelAttr.form.setValue(formAttr.name, value);
  };

  return (
    <FormField
      control={formAttr.control}
      name={formAttr.name}
      render={({ field }) => {
        if (labelAttr.formType === "SELECT") {
          return (
            <FormItem className="w-full">
              <FormLabel
                className={`text-14 ${formVariant === "GRAY" && "text-custom-gray text-14"}`}
              >
                {labelAttr.labelText}
              </FormLabel>
              <FormControl>
                <Select
                  value={selectValue}
                  onValueChange={(val) => handleChangeValue(val)}
                >
                  <SelectTrigger2
                    className={`rounded-lg z-20 ${!labelAttr.border && "border-none"} px-3 py-[6px] ${labelAttr.selectBarSize === "sm" && "h-[38px] text-14"}`}
                  >
                    <SelectValue
                      placeholder={labelAttr.placeholder}
                    ></SelectValue>
                  </SelectTrigger2>

                  <SelectContent
                    className="max-h-[300px] overflow-y-auto"
                    {...field}
                  >
                    <SelectGroup className="text-paragraph-4">
                      <>
                        {labelAttr.selectData.length > 0 &&
                          labelAttr.selectData.map((item) => (
                            <SelectItem
                              icon={null}
                              key={item.text}
                              value={
                                item.value === true
                                  ? "true"
                                  : item.value === false
                                    ? "false"
                                    : String(item.value)
                              }
                            >
                              {item.text}
                            </SelectItem>
                          ))}
                      </>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }
        if (labelAttr.formType === "RADIO") {
          return (
            <FormItem>
              <FormControl>
                <div>
                  <RadioGroup
                    className={`flex h-full ${labelAttr.radioVertical ? "flex-col gap-[10px]" : "items-center gap-5"}`}
                    {...field}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    {labelAttr.selectData.length > 0 &&
                      labelAttr.selectData.map((item, i) => {
                        return (
                          <div
                            key={item.text + i}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem
                              id={item.text + i}
                              value={
                                item.value === true
                                  ? "true"
                                  : item.value === false
                                    ? "false"
                                    : item.value
                              }
                              defaultChecked={
                                labelAttr.defaultValue == item.value
                              }
                            />
                            <Label htmlFor={item.text + i}>{item.text}</Label>
                          </div>
                        );
                      })}
                  </RadioGroup>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        } else if (labelAttr.formType === "DEFAULT") {
          return (
            <FormItem className="w-full">
              <FormLabel
                className={`text-paragraph-6 ${formVariant === "GRAY" && "text-gray-500 text-[14px]"}`}
              >
                {labelAttr.labelText}
              </FormLabel>
              <FormControl>
                <Input
                  disabled={labelAttr.disabled}
                  className={`disabled:border disabled:bg-gray-100 ${formVariant === "GRAY" && "h-10 px-3"}`}
                  maxLength={labelAttr.maxLength}
                  type={labelAttr.type ? labelAttr.type : "text"}
                  placeholder={labelAttr.placeholder}
                  {...field}
                  value={
                    formType === "QUESTION"
                      ? typeof field.value !== "string"
                        ? ""
                        : field.value
                      : field.value
                  }
                  onChange={(e) => {
                    if (labelAttr.type === "tel") {
                      if (/^\d*$/.test(e.target.value)) {
                        field.onChange(e);
                      }
                    } else {
                      field.onChange(e);
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        } else return <div></div>;
      }}
    ></FormField>
  );
};

export default CustomFormField;
