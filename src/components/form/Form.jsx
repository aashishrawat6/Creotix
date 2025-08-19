import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./Form.css";
import formcover from "/formcover.png";

// ✅ Validation Schema
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),

  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\+?\d{10,15}$/, "Enter a valid phone number (10–15 digits)"),

  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message must not exceed 500 characters"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onBlur", // Validates on blur, can change to "onChange"
  });

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Form submitted successfully!");
    reset();
  };
  return (
    <section id="form">
      <div className="section">
        <div className="container">
          <div className="formcover">
            <img src={formcover} alt="" />
          </div>
          <form>
            <h3 className="subHeading">Contact us</h3>
            <h1 className="heading">Get in Touch</h1>
            <p className="headingPara">
              Whether you have a project idea, a question, or just want to say
              hello — we’d love to hear from you.
            </p>

            <div className="inputArea">
              {/* Name */}
              <div className="inputBox">
                <input type="text" placeholder="Name" {...register("name")} />
                {errors.name && (
                  <span className="error">{errors.name.message}</span>
                )}
              </div>

              {/* Email */}
              <div className="inputBox">
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </div>

              {/* Phone */}
              <div className="inputBox">
                <input
                  type="tel"
                  placeholder="Phone number"
                  {...register("phone")}
                />
                {errors.phone && (
                  <span className="error">{errors.phone.message}</span>
                )}
              </div>

              {/* Message */}
              <div className="inputBox">
                <textarea placeholder="Message" {...register("message")} />
                {errors.message && (
                  <span className="error">{errors.message.message}</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={isSubmitting} className="ctaButton">
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
