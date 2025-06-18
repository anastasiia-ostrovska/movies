import Box from '@mui/material/Box';
import AccordionPanel from './AccordionPanel';
import { ACCORDION_ITEMS } from '../config/accordion-items';

const { addMovie, uploadMoviesFile } = ACCORDION_ITEMS;

const AddMoviesAccordion = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: 450 }}>
      <AccordionPanel id={addMovie.id} title={addMovie.title} content={addMovie.content} />
      <AccordionPanel
        id={uploadMoviesFile.id}
        title={uploadMoviesFile.title}
        content={uploadMoviesFile.content}
      />
    </Box>
  );
};

export default AddMoviesAccordion;
