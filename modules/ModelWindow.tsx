import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { MdOutlineSubtitles, MdOutlineViewInAr } from "react-icons/md";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({ heading, body }: any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <MdOutlineViewInAr /> <p className=" ml-3">View Post</p>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className=" font-semibold flex gap-3 items-center"
            >
              <MdOutlineSubtitles /> {heading}
            </Typography>
            <Typography
              id="transition-modal-description   "
              sx={{ mt: 2 }}
              className="flex gap-3 items-center"
            >
              <FaEnvelopeOpenText /> {body}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
