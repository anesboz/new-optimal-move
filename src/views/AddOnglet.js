import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button, TextField } from '@mui/material'
import Banner from 'components/Banner/Banner'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useLocation, useNavigate } from 'react-router-dom'
import { addOnglet } from 'actions/localstorage/ongletsActions'
import { setOngletPage } from 'actions/mainActions'
import { connect } from 'react-redux'
import { getData } from 'actions/localstorage/generalActions'
import { page_addEmptyPage } from 'actions/localstorage/pagesActions'

function AddOnglet(props) {
  const { iCurrentOnglet, iCurrentPage } = props
  const { state } = useLocation()
  let init_onglet = {}
  if (state?.iOnglet_toModify != null) {
    init_onglet = getData()[state?.iOnglet_toModify]
  }

  const [name, setName] = useState(init_onglet.name)
  const [emoji, setEmoji] = useState(init_onglet.emoji) //'😃'
  const [imgURL, setImgURL] = useState(init_onglet.imgURL)

  const navigate = useNavigate()

  const [expanded, setExpanded] = useState('panel1')
  const handleChange = (panel) => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false)

  return (
    <div style={{ height: `100vh` }}>
      <div style={{ position: `relative`, height: `30%` }}>
        <ArrowBackIcon
          color="disabled"
          style={{
            position: 'absolute',
            margin: 10,
            left: 0,
            zIndex: 10,
          }}
          onClick={() => navigate(-1)}
        />
        <Banner />
      </div>
      <div style={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography color={name === null ? 'red' : ''}>
              Onglet: {name ?? null}
            </Typography>
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'center' }}>
            <TextField
              id="field1"
              label="Nom de l'onglet"
              autoComplete="off"
              inputProps={{
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography>Emoji : {emoji ?? null}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'center' }}>
            <TextField
              id="field3"
              label="Emoji (facultatif)"
              autoComplete="off"
              inputProps={{
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
              // 😃
              onChange={(event) => setEmoji(event.target.value)}
              value={emoji}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography>Image : {imgURL ? '✔️' : null}</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'center' }}>
            <TextField
              fullWidth
              id="field2"
              label="Image URL (facultatif)"
              autoComplete="off"
              inputProps={{
                autoComplete: 'new-password', // disable autocomplete and autofill
              }}
              onChange={(event) => setImgURL(event.target.value)}
              value={imgURL}
            />
          </AccordionDetails>
        </Accordion>
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            padding: '3rem',
          }}
        >
          <Button
            variant="contained"
            color="success"
            fullWidth
            onClick={() => {
              const newOnglet = {
                name,
                emoji,
                imgURL,
                pages: init_onglet.pages ?? [],
              }
              console.log(`🚩 . newOnglet`, newOnglet)
              const n = getData().length
              addOnglet(newOnglet, state?.iOnglet_toModify)
              // page_addEmptyPage(n, 0)
              navigate('/')
              setOngletPage(state?.iOnglet_toModify ?? n, iCurrentPage)
            }}
          >
            Add Onglet
          </Button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(AddOnglet)
