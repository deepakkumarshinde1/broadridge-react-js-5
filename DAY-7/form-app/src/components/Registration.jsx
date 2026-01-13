import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../Registration.css";
import Error from "./Error";
function Registration() {
  const schema = yup.object({
    fullName: yup
      .string()
      .min(2, "Enter min 2 char")
      .required("Enter FullName"),
    course: yup
      .array()
      .of(yup.string())
      .min(1, "Select at least 2 course")
      .required(),
  });
  let {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
      gender: "",
      course: ["html"],
      city: "",
      address: "",
      iAgree: false,
    },
  });
  console.log(errors);

  let createAccount = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="registration-form">
        <h2>Student Registration Form</h2>

        <form onSubmit={handleSubmit(createAccount)}>
          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              {...register("fullName")}
            />
            <Error errors={errors} name="fullName" />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" />
            <small className="error">Valid email is required</small>
          </div>

          {/* Mobile */}
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="text" placeholder="Enter mobile number" />
            <small className="error">Mobile number is required</small>
          </div>

          {/* Gender - Radio */}
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input type="radio" value="male" {...register("gender")} />
                Male
              </label>
              <label>
                <input type="radio" {...register("gender")} value="female" />{" "}
                Female
              </label>
              <label>
                <input type="radio" {...register("gender")} value="other" />{" "}
                Other
              </label>
            </div>
            <small className="error">Please select gender</small>
          </div>

          {/* Course - Checkbox */}
          <div className="form-group">
            <label>Select Course</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  disabled
                  value="html"
                  {...register("course")}
                />
                HTML
              </label>
              <label>
                <input type="checkbox" value="css" {...register("course")} />{" "}
                CSS
              </label>
              <label>
                <input
                  type="checkbox"
                  value="javascript"
                  {...register("course")}
                />
                JavaScript
              </label>
              <label>
                <input
                  type="checkbox"
                  value="react-js"
                  {...register("course")}
                />
                React JS
              </label>
            </div>
            <Error errors={errors} name="course" />
          </div>

          {/* City - Dropdown */}
          <div className="form-group">
            <label>City</label>
            <select {...register("city")}>
              <option value="">-- Select City --</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Nashik">Nashik</option>
              <option value="Nagpur">Nagpur</option>
            </select>
            <small className="error">Please select city</small>
          </div>

          {/* Address - Textarea */}
          <div className="form-group">
            <label>Address</label>
            <textarea rows="4" placeholder="Enter address"></textarea>
            <small className="error">Address is required</small>
          </div>

          {/* Terms */}
          <div className="form-group">
            <label>
              <input type="checkbox" /> I agree to terms & conditions
            </label>
            <small className="error">You must accept terms</small>
          </div>

          {/* Submit */}
          <div className="form-group">
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Registration;
