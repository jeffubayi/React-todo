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
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Icon from "@material-ui/core/Icon";
import { format } from "date-fns";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import FormHelperText from "@material-ui/core/FormHelperText";

class AddToDo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        todo: {
          title: "",
          desc: "",
          priority: 0,
          dateBegin: format(new Date(), "MM/dd/yyyy"),
          dateEnd: format(new Date(), "MM/dd/yyyy"),
          completed: false,
          projectKey: "",
        },
        hasError: false,
      };
    }
    handleToggle = () => {
        this.setState((previousState) => ({ open: !previousState.open }));
      };
    
      handleSubmit = (event) => {
        const { todo } = this.state;
        const { projectKey } = todo;
        const { addTodo } = this.props;
        event.preventDefault();
        this.setState({ hasError: false });
        if (!projectKey) {
          this.setState({ hasError: true });
        } else {
          addTodo(todo);
          this.handleToggle();
        }
      };
    
      handleChange = (name) => ({ target: { value } }) => {
        this.setState((previousState) => {
          const todo = {
            ...previousState.todo,
            [name]: value,
          };
          return { todo };
        });
      };
    
      handleDateChange = (date) => {
        this.setState((previousState) => {
          const todo = {
            ...previousState.todo,
            dateEnd: format(date, "MM/dd/yyyy"),
          };
          return { todo };
        });
      };
      