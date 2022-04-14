import React from "react"
import Button from '../../components/Button';

interface ApplicationBtnProps {
  handleClickOpen: () => void
}

const ApplicationBtn: React.FC<ApplicationBtnProps> = ({ handleClickOpen }) => {
	return (
    <Button
      id="header-btn"
      onClick={() => handleClickOpen()}
      color="secondary"
      variant="contained"
      size="medium"
      sx={{ minWidth: 200 }}
    >
      Оставить заявку
    </Button>
	)
}

export default ApplicationBtn
