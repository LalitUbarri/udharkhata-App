import * as yup from "yup";

export const customerSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Customer name is required")
    .min(2, "Name should be at least 2 characters")
    .max(50, "Name should be less than 50 characters"),

  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Enter a valid mobile number"),

  whatsapp: yup
    .string()
    .nullable()
    .test(
      "whatsapp",
      "Enter a valid WhatsApp number",
      (value) => {
        if (!value) return true;
        return /^[6-9]\d{9}$/.test(value);
      }
    ),

  address: yup
    .string()
    .max(200, "Address is too long")
    .nullable(),

  note: yup
    .string()
    .max(500, "Note is too long")
    .nullable(),

  openingBalance: yup
    .number()
    .typeError("Opening balance must be a number")
    .min(0, "Balance cannot be negative")
    .required(),

  balanceType: yup
    .mixed<"GIVE" | "TAKE">()
    .oneOf(["GIVE", "TAKE"])
    .required(),
});