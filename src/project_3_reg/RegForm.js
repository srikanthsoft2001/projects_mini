import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", password: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const validate = () => {
    let newErrors = { name: "", email: "", password: "" };
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setOpenSnackbar(true);
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <Box
      sx={{
        width: 400,
        margin: "auto",
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Registration Form
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          variant="outlined"
          margin="normal"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          error={!!errors.password}
          helperText={errors.password}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
        >
          Register
        </Button>
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
          Registration Successful!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default RegistrationForm;

// import React, { useState } from "react";

// function RegForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({ name: "", email: "", password: "" });

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (validate()) {
//       alert("Registration Successful!");
//       setFormData({ name: "", email: "", password: "" });
//     }
//   }

//   const validate = () => {
//     let newErrors = { name: "", email: "", password: "" };
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
//     if (formData.password.length < 6)
//       newErrors.password = "Password must be 6+ characters";
//     setErrors(newErrors);
//     return Object.values(newErrors).every((err) => err === "");
//   };

//   return (
//     <div>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />
//         <span>{errors.name}</span>

//         <input
//           type="email"
//           placeholder="Email"
//           value={formData.email}
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />
//         <span>{errors.email}</span>

//         <input
//           type="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={(e) =>
//             setFormData({ ...formData, password: e.target.value })
//           }
//         />
//         <span>{errors.password}</span>

//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// }

// export default RegForm;
