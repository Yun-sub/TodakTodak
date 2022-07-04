import React from "react";
import { Button, Checkbox, Stack } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

function Todo({ toDos, onRemove }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));
  return (
    <div>
      <Stack>
        <Item>
        <Checkbox
              value="checkedA"
            />
        <b>{toDos.text}  </b>
        <Button variant="outlined" onClick={()=> onRemove(toDos.id)}>DEL</Button>
        </Item>
      </Stack>
    </div>
  );
}

export default Todo;