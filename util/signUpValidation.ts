export function signUpValidation({ email }: { email: string }) {
  if (
    !(
      email?.includes("@") &&
      email?.indexOf("@") > 2 &&
      email?.length - email.indexOf("@") > 5
    )
  ) {
    return { valid: false, message: "Please enter a valid email address." };
  }
  return { valid: true, message: "Signing Up.." };
}
