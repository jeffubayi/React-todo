import React from "react";
 .

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
      return(
          <> Al todos completed</>
      );
};

}