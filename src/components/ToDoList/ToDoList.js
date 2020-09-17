import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ToDo from "../ToDo/ToDo";
import ToDoEmpty from "../ToDoEmpty/ToDoEmpty";

export default function TodosList(props){
    const {
        todos,
        projects,
        projectIcons,
        setTodoCompleted,
        deleteTodo,
        updateTodo
    } = props;
    const noTodos = Object.keys(todos).length === 0;
    if (noTodos) {
        return (
            <Paper>
              <List>
                <ToDoEmpty message="All Todos Completed!" />
              </List>
            </Paper>
          );
        }
        <Paper>
        <List>
          {Object.keys(todos).map((key) => (
            <ToDo
              key={key}
              index={key}
              todo={todos[key]}
              projects={projects}
              projectIcons={projectIcons}
              setTodoCompleted={setTodoCompleted}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
            />
          ))}
        </List>
      </Paper>
    );
  }