import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

const RenderError = ({ error, message }) => (
  <div className="text-red-500 mt-2 text-sm">{message}</div>
);

const rules = {
  firstName: Yup.string()
    .max(80, "Must be 80 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(80, "Must be 80 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  gender: Yup.string().required("Required"),
  table: Yup.string().required("Required"),
  age: Yup.number().required("Required"),
};

export default function AddGuest({ setGuestList, saveState }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      table: "",
      gender: "",
    },
    validationSchema: Yup.object(rules),
    onSubmit: (values) => {
      const { firstName, lastName, email, age, table, gender } = values;

      setGuestList((prevGuestList) => [
        ...prevGuestList,
        {
          id: uuidv4(),
          firstName: firstName,
          lastName: lastName,
          email: email,
          age: age,
          table: table,
          gender: gender,
        },
      ]);
    },
  });

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="p-8 shadow-md rounded">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Add a new guest
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm mb-2">
              First Name
            </label>
            <input
              type="text"
              className="transition duration-200 ease outline-none block border border-gray-200 rounded w-full p-2 hover:border-gray-400"
              id="firstName"
              name="firstName"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            <RenderError
              error={formik.touched.firstName && formik.errors.firstName}
              message={formik.errors.firstName}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="transition duration-200 ease outline-none block border border-gray-200 rounded w-full p-2 hover:border-gray-400"
              id="lastName"
              name="lastName"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            <RenderError
              error={formik.touched.lastName && formik.errors.lastName}
              message={formik.errors.lastName}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">
              Email
            </label>
            <input
              type="email"
              className="transition duration-200 ease outline-none block border border-gray-200 rounded w-full p-2 hover:border-gray-400"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <RenderError
              error={formik.touched.email && formik.errors.email}
              message={formik.errors.email}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm mb-2">
              Age
            </label>
            <input
              type="text"
              className="transition duration-200 ease outline-none block border border-gray-200 rounded w-full p-2 hover:border-gray-400"
              id="age"
              name="age"
              onChange={formik.handleChange}
              value={formik.values.age}
            />
            <RenderError
              error={formik.touched.age && formik.errors.age}
              message={formik.errors.age}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm mb-2">
              Gender
            </label>
            <select
              type="text"
              name="gender"
              className="transition duration-200 ease outline-none block border border-gray-200 rounded w-full p-2 hover:border-gray-400"
              id="gender"
              onChange={formik.handleChange}
              value={formik.values.gender}
            >
              <option>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <RenderError
              error={formik.touched.gender && formik.errors.gender}
              message={formik.errors.gender}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="table" className="block text-sm mb-2">
              Table
            </label>
            <select
              className="transition duration-200 ease outline-none block border border-gray-200 rounded w-full p-2 hover:border-gray-400"
              id="table"
              name="table"
              onChange={formik.handleChange}
              value={formik.values.table}
            >
              <option>Select</option>
              <option value="1">table 1</option>
              <option value="2">table 2</option>
              <option value="3">table 3</option>
              <option value="4">table 4</option>
              <option value="5">table 5</option>
            </select>
            <RenderError
              error={formik.touched.table && formik.errors.table}
              message={formik.errors.table}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 rounded bg-gray-900 text-gray-50 flex items-center transition duration-300 ease hover:bg-gray-800"
          >
            <span>Submit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
