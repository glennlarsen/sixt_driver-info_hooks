import * as yup from "yup";
import { EMAIL_REGEX, MAX_PHONE_NUMBERS, MIN_PHONE_NUMBERS } from "constants/validationRules";

const schema = yup.object().shape({
  country: yup.string().required("Please enter your home country"),
  postal: yup.string().required("Please enter your Postal Code"),
  city: yup.string().required("Please enter your City"),
  email: yup
    .string()
    .required("Please enter your email")
    .matches(EMAIL_REGEX, "Enter a valid email"),
  phone: yup.string().required("Please enter your Phone Number").max(MAX_PHONE_NUMBERS, "Phone number is to long").min(MIN_PHONE_NUMBERS, "Phone number is to short"),
  street: yup.string().required("Please enter your Street address"),
});

export default schema;
