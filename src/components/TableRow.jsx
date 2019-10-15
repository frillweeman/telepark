import React, { Component } from "react";
import {
  Grid,
  ListItem,
  IconButton,
  Checkbox,
  Hidden
} from "@material-ui/core";

const isToday = someDate => {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};

const toShortDate = date => {
  return `${date.getMonth() + 1}/${date.getDate()}`;
};

const style = {
  body: {
    textAlign: "center"
  }
};

class TableRow extends Component {
  handleClickRow = e => {
    if (e.target.tagName === "DIV")
      this.props.onRowClick(this.props.reservation.id);
  };

  handleCheckboxChange = (e, checked) => {
    this.props.onCheckboxChange(this.props.reservation.id, checked);
  };

  render() {
    return (
      <ListItem button onClick={this.handleClickRow} divider style={style.body}>
        <Hidden xsDown>
          <Grid item sm={1}>
            <Checkbox
              checked={this.props.selected}
              onChange={this.handleCheckboxChange}
            />
          </Grid>
          <Grid item sm={1}>
            <IconButton
              onClick={this.props.onDelete.bind(
                null,
                this.props.reservation.id
              )}
            >
              <i className="material-icons">delete</i>
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item xs={2} style={!this.props.head ? { color: "#0088ff" } : {}}>
          {this.props.reservation.player_id}
        </Grid>
        <Grid
          item
          xs={4}
          style={{
            textTransform: "none",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >
          {this.props.reservation.for}
        </Grid>
        <Grid
          item
          xs={3}
          style={{ color: "#e66b00", whiteSpace: "nowrap", overflow: "hidden" }}
        >
          {isToday(this.props.reservation.from.toDate())
            ? this.props.reservation.from.toDate().toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
              })
            : toShortDate(this.props.reservation.from.toDate())}
        </Grid>
        <Grid
          item
          xs={3}
          style={
            !this.props.head
              ? { color: "#e66b00", whiteSpace: "nowrap", overflow: "hidden" }
              : {}
          }
        >
          {isToday(this.props.reservation.to.toDate())
            ? this.props.reservation.to.toDate().toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
              })
            : toShortDate(this.props.reservation.to.toDate())}
        </Grid>
      </ListItem>
    );
  }
}

export default TableRow;
