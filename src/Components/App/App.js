/* eslint-disable object-curly-newline */
/* eslint-disable object-curly-newline */
import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import yellow from "@material-ui/core/colors/yellow";
import amber from "@material-ui/core/colors/amber";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import brown from "@material-ui/core/colors/brown";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import CssBaseline from "@material-ui/core/CssBaseline";
import ToDoList from "../ToDosList/ToDosList";
import Copyright from "../Copyright/Copyright";
import { sampleTodos, sampleProjects } from "../../sample-data";
import ToDoListAppBar from "../ToDoListAppBar/ToDoListAppBar";
import AddToDo from "../AddToDo/AddToDo";
import { generateId } from "../../helpers";
import base from "../../base";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {},
      projects: {},
      themeMode: "dark",
      themeColors: {
        color: "orange",
        primaryMain: App.colors.orange[400], // Main button colour
        primaryDark: App.colors.orange.A700, // Highlight colour for dark mode
        secondaryMain: App.colors.orange[700], // Secondary button colour
      },
    };
  }

