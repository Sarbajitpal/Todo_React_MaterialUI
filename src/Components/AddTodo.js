import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class AddTodo extends PureComponent {
  static propTypes = {
    handleClick: PropTypes.func
  };

  state = {
    inputValue: ""
  };

  onClick = event => {
    event.preventDefault();
    var todo = this.state.inputValue;
    if (todo === "") return;
    else {
      var form = document.getElementById("myForm");
      form.reset();
      this.props.handleClick(todo);
      this.setState({ inputValue: "" });
    }
  };

  render() {
    console.count("Add Todo");
    return (
      <MuiThemeProvider>
        <div>
          <form id="myForm">
            <Paper style={{ width: "95%", leftMargin: "15px" }} zDepth={1}>
              <div style={{ marginLeft: "10px",marginRight:"10px" }}>
                <TextField
                  style={{ width:"85%" }}
                  hintText="Add ToDo"
                  className="AddText"
                  onChange={e => this.setState({ inputValue: e.target.value })}
                />
             <RaisedButton
              style={{ float:"right",marginTop:"7px" }}
              type="submit"
              label="Add todo"
              primary={true}
              onClick={this.onClick}
            />
            </div>

            </Paper>

            <br />
            
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AddTodo;
