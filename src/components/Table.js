import React, { Fragment } from "react"
import Row from "./Row"
import RowVelib from "./RowVelib"
import styled from "styled-components"
import { connect } from "react-redux"

import Plus from "./Plus"
import { noctilienEtJour } from "../actions/ongletAction"

const TableContainer = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
  max-height: 30%;
`

const Description = styled.div`
  font-size: 50%;
  color: gray;
`

// depart: "Villejuif Leo Lagrange"
// imgUrl: "https://www.ratp.fr/sites/default/files/lines-assets/picto/metro/picto_metro_ligne-7.svg"
// query: "https://api-ratp.pierre-grimaud.fr/v4/schedules/metros/7/Villejuif%20L

function Table(props) {
  let currentOnglet = props.currentOnglet
  let currentPage = props.currentPage
  // n'affiche rien si aucune button n'est selectionne
  if (currentOnglet == null) {
    return null
  }
  const onglet = props.allOnglets[currentOnglet]
  const list = onglet.list[currentPage]
  // test(() => list)
  if (list.length == 0) {
    return null
  }
  return (
    <Fragment>
      <h6 className="mt-2">{onglet.description?.[currentPage]}</h6>
      <TableContainer className="col-10 mt-2 p-0">
        {list.map((row, i) => (
          <Fragment key={i}>
            {/^[0-9]+$/.test(row.query) ? (
              <RowVelib depart={row.depart} id={i} key={i} />
            ) : noctilienEtJour(row.query) ? null : (
              <Fragment>
                <Description>
                  {row.depart} ➙ {props.page?.[i]?.arrivee?.[0]}
                </Description>
                <Row row={row} id={i} key={i} />
              </Fragment>
            )}
          </Fragment>
        ))}
      </TableContainer>
      <Plus />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  currentOnglet: state.onglets.currentOnglet,
  currentPage: state.onglets.currentPage,
  page: state.onglets.page,
  allOnglets: state.data.allOnglets,
})

export default connect(mapStateToProps)(Table)
