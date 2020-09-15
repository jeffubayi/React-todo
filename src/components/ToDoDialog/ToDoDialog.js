import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import EditIcon from "@material-ui/icons/Edit";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Icon from "@material-ui/core/Icon";
import { format } from "date-fns";

export default function ToDoDialog(props) {
    const [open, setOpen] = React.useState(false);
    // Chad's suggestion. Implement this once you've got everything working:
    // const { index: { index }, todo: { title, desc, dateEnd, projectId, priority } } = props;
    const {
      todo: { title, desc, dateEnd, priority, projectKey },
      projects,
      index,
      projectIcons,
      updateTodo,
    } = props;
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleClose();
    };
  
    const handleChange = (event) => {
      // Update the todo
      // 1. Take a copy of the current todo
      const updatedTodo = {
        ...props.todo,
        // Match the key with the "name" property of the control
        [event.currentTarget.name]: event.currentTarget.value,
      };
      updateTodo(index, updatedTodo);
    };
  
    const handleSelect = (event) => {
      const updatedTodo = {
        ...props.todo,
        // Match the key with the "name" property of the control
        // [event.target.name]: parseInt(event.target.value, 10),
        [event.target.name]: event.target.value,
      };
      updateTodo(index, updatedTodo);
    };
  
    const handleDateChange = (date) => {
      const updatedTodo = {
        ...props.todo,
        // Match the key with the "name" property of the control
        dateEnd: format(date, "MM/dd/yyyy"),
      };
      updateTodo(index, updatedTodo);
    };