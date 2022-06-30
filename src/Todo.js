import React from "react";
import { Button, Checkbox } from "@mui/material";

function Todo({ toDos, onRemove }) {
  return (
    <div>
        <Checkbox
              value="checkedA"
            />
        <b>{toDos.text}  </b>
        <Button variant="outlined" onClick={()=> onRemove(toDos.id)}>DEL</Button>
        </div>
  );
}

export default Todo;