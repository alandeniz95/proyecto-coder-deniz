import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { nameApp } from "../NavBar/Navbar";
import "./styles/modal.scss";

export const ModalExample = (props) => {
  const { className } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="modalDiv">
      <Button className="btnSuccess" color="success" onClick={toggle}>
        Agregar al carrito
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{nameApp}</ModalHeader>
        <ModalBody>Producto agregado al carrito correctamente</ModalBody>
        <ModalFooter>
          <Link exact to="/cart">
            <Button color="primary" onClick={toggle}>
              Ver Carrito
            </Button>
          </Link>
        </ModalFooter>
      </Modal>
    </div>
  );
};
