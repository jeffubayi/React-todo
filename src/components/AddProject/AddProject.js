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
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";

class AddProject extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        project: {
          title: "",
          desc: "",
          icon: 0,
        },
      };
    }
  
    handleToggle = () => {
      this.setState((previousState) => ({ open: !previousState.open }));
    };
  
    handleSubmit = (event) => {
      const { addProject } = this.props;
      const { project } = this.state;
      event.preventDefault();
      addProject(project);
      this.handleToggle();
    };
  
    handleChange = (name) => ({ target: { value } }) => {
      this.setState((previousState) => {
        const project = {
          ...previousState.project,
          [name]: value,
        };
        return { project };
      });
    };
  