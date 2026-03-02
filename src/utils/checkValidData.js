export const checkValidData = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  if (!emailRegex.test(email.trim()))
    return "Please enter a valid email address.";

  if (!passwordRegex.test(password))
    return "Password must contain 8+ characters, uppercase, lowercase, number and special character.";

  return null;
};
