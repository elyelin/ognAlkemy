import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSlideById } from '../../../services/slidesService';
import SlideForm from '../components/SlideForm';

const EditSlidePage = () => {
  const { id } = useParams();
  const { res, error } = getSlideById(id);
  const [slide, setSlide] = useState(null);

  useEffect(() => {
    if (res?.data) {
      const { user_id, created_at, updated_at, deleted_at, ...rest } = res.data;
      setSlide(rest);
    }
    if (error) console.log(error);
  }, [res, error]);

  return <SlideForm data={slide} />;
};

export default EditSlidePage;
