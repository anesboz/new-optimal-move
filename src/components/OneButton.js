import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import data from "../data";
import { attributeOnglet, uploadPage } from "../actions/ongletAction";

const Div = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
  background-color: #00aa91;
  opacity: ${(props) => `${props.selected ? 1 : 0.5};
  `};
`;

const Img = styled.img`
  height: 80%;
  border-radius: 50%;
`;
function OneButton(props) {
  const onglet = props.onglet;
  const id = data.indexOf(onglet);
  let selected = id === props.currentOnglet;
  let img =
    "http://cdn.shopify.com/s/files/1/0066/0478/3687/products/FA205-france_1200x1200.jpg?v=1580479406";
  return (
    <Div
      onClick={() => {
        props.attributeOnglet(id);
      }}
      selected={selected}
    >
      <Img src={props.onglet.logo} alt={onglet.name}/>
    </Div>
  );
}

const mapStateToProps = (state) => ({
  currentOnglet: state.onglets.currentOnglet,
  currentPage: state.onglets.currentPage,
});

export default connect(mapStateToProps, { attributeOnglet, uploadPage })(
  OneButton
);
