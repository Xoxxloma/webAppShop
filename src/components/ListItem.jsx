import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";
import React from "react";

export const ListItem = ({ header, description, badge }) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{header}</div>
        {description}
      </div>
      {badge && (
        <Badge bg={badge.bg} pill>
          {badge.text}
      </Badge>
      )}
    </ListGroup.Item>
  )
}
