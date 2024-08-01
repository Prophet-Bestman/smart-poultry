interface SignupPayload {
  fullName: string;
  email: string;
  password: string;
}

interface LoggedInUser {
  fullName: string;
  email: string;
  role: "Admin" | "Staff";
  id: string;
}
