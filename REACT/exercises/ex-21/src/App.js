import logo from "./logo.svg";
import "./App.css";

import Button from "@mui/material/Button";
import { TextField, FormControl, Select, MenuItem, InputLabel } from "@mui/material";

function App() {
  return (
    <>
      <Button variant="outlined" color="error">
        Delete
      </Button>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        color="error"
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"

        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default App;
