import { useState, useEffect } from "react";

const SignForm = ({ isLogin, styles }) => {
  let [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setCredentials({ name: "", email: "", password: "" });
  }, [isLogin]);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);
  };
  return (
    <form className={styles.signForm} onSubmit={handleSubmit}>
      {!isLogin && (
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={credentials.name}
          placeholder="enter your name"
        />
      )}
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={credentials.email}
        placeholder="enter your email"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={credentials.password}
        placeholder="enter your password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignForm;
