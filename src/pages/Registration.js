import React,{useState} from "react";

const Registration = () => {

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObject = { ...prev, [name]: "" };
   
      switch (name) {
        case "firstName":
          if (!value) {
            stateObject[name] = "Please enter your first name.";
          }
          break;

        case "lastName":
            if (!value) {
              stateObject[name] = "Please enter your last name.";
            }
            break;

          case "email":
            if (!value) {
              stateObject[name] = "Please enter your email.";
            }
            break;
   
        case "password":
          if (!value) {
            stateObject[name] = "Please enter the password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObject["confirmPassword"] = "Your password and the confirm password are not matching. Please type them again.";
          } else {
            stateObject["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
      case "confirmPassword":
        if (!value) {
          stateObject[name] = "Please re-enter your password.";
        } else if (input.password && value !== input.password) {
          stateObject[name] = "Your password and the confirm password are not matching. Please type them again.";
        }
        break;
 
      default:
        break;
    }
 
    return stateObject;
  });
  }

  return (
    <div className="bg-gray-100 m-auto max-w-xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8 space-y-6">
      <p className="text-2xl font-extrabold">Registration</p>
      <div className="row">
      <div className="column">
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={input.firstName}
          onChange={onInputChange}
          onBlur={validateInput}
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="First Name" required
        />
        <div>
          {error.firstName && <span>{error.firstName}</span>}
        </div>
      </div>
      <div className="column space">
        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={input.lastName}
          onChange={onInputChange}
          onBlur={validateInput}
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Last Name" required
        />
        <div className="red">
         {error.lastName && <span>{error.lastName}</span>}
        </div>
      </div>
      </div>
      <div>
        <label htmlFor="role" className="sr-only">
          Role
        </label>
        <p className="instruction">Choose your role:</p>
        <select name="role" id="role" className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option value="patient">Patient</option>
          <option value="professional">Professional</option>
        </select>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={input.email}
          onChange={onInputChange}
          onBlur={validateInput}
          autoComplete="email"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Email" required
        />
        <div className="red">
         {error.email && <span>{error.email}</span>}
        </div>
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={input.password}
          onChange={onInputChange}
          onBlur={validateInput}
          autoComplete="password"
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Password"
        />
        <div className="red">
          {error.password && <span>{error.password}</span>}
        </div>
      </div>
      <div>
        <label htmlFor="confirmPassword" className="sr-only">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPpassword"
          value={input.confirmPassword}
          onChange={onInputChange}
          onBlur={validateInput}
          className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Confirm Password"
        />
        <div className="red">
          {error.confirmPassword && <span>{error.confirmPassword}</span>}
        </div>
      </div>
      <button className="w-full px-10 py-3 text-white font-semibold bg-black rounded-md">
        Register
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline ml-4 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default Registration;
