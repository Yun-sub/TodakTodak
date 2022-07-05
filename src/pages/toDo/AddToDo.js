import React from "react";
import { Button, TextField } from "@mui/material";

function AddToDo({ text, onSubmit, onChange }) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          type='text'
          onChange={onChange}
          value={text}
          label='Write your to do...'
          variant='outlined'
        />
        <Button variant='contained' onClick={onSubmit}>
          Add
        </Button>
      </form>
    </div>
  );
}

export default AddToDo;
