import React,{useState} from "react";
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
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";

export default function ProjectDialog(props) {
  const [open, setOpen] = useState(false);
  const {
    project: { title, desc, icon },
    index,
    projectIcons,
    updateProject,
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
    // Update the project
    // 1. Take a copy of the current todo
    const updatedProject = {
      ...props.project,
      // Match the key with the "name" property of the control
      [event.target.name]: event.target.value,
    };
    updateProject(index, updatedProject);
  };