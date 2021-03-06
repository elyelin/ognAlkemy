import React from 'react';
import { Button, Container, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { testimonialSelectors } from '../../../../reducers/testimonialsReducer';
import TestimonialCard from '../../components/backoffice/TestimonialCard';
import { ConditionalRender } from '../../../../components/Error/ErrorMsg';

const Testimonials = () => {
  const allTestimonials = useSelector(testimonialSelectors.selectAll);
  const { testimonials } = useSelector(state => state)

  const List = () => (
    <SimpleGrid columns={{ lg: 3, sm: 2, base: 1 }} spacing={4}>
      {allTestimonials.map( testimonial =>
        <TestimonialCard key={testimonial.id} {...testimonial} />
      )}
    </SimpleGrid>
  )

  return (
    <Container maxWidth="1024px" my={10}>
      <Link to="/backoffice/testimonials/create">
        <Button colorScheme="teal">Crear testimonio</Button>
      </Link>
      {ConditionalRender(testimonials.status, List, 'No se pudieron cargar los testimonios')}
    </Container>
  );
};

export default Testimonials
