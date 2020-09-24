import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import theme from "../../theme";
import { getListName } from "../../helpers";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Paper, Typography, Button } from "@material-ui/core";

class ListPicker extends React.Component {
    myInput = React.createRef();
  
    goToList = (event) => {
      // 1. Stop the form from submitting
      event.preventDefault();
      // 2. get the text from that input
      const listName = this.myInput.current.value;
      // 3. Change the page to /store/whatever-they-entered
      this.props.history.push(`/list/${listName}`);
    };