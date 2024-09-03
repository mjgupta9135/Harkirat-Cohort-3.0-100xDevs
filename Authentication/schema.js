const z = require("zod");
const signinSchema = z.object({
  email: z
    .string({ invalid_type_error: "Email Must be an string" })
    .email("Invalid e-mail format"),

  password: z
    .string({ invalid_type_error: "Password must be a string" })
    .min(8, {
      message: "Password at least contain 8 character",
    }),
});

const signupSchema = z.object({
  username: z
    .string({
      invalid_type_error: "Name must be a string",
    })
    .min(5, { message: "Must be 5 or more characters long" }),

  email: z
    .string({ invalid_type_error: "Email Must be an string" })
    .email("Invalid e-mail format"),

  password: z
    .string({ invalid_type_error: "Password must be a string" })
    .min(8, {
      message: "Password at least contain 8 character",
    }),
});

const updateSchema = z.object({
  email: z
    .string({ invalid_type_error: "Email Must be an string" })
    .email("Invalid e-mail format"),

  password: z
    .string({ invalid_type_error: "Password must be a string" })
    .min(8, {
      message: "Password at least contain 8 character",
    }),
  updatedName: z
    .string({
      invalid_type_error: "Name must be a string",
    })
    .min(5, { message: "Must be 5 or more characters long" }),
});
module.exports = { signinSchema, signupSchema, updateSchema };
