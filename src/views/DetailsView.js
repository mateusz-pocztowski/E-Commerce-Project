import React, { useState, useEffect } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { useLocation } from 'react-router-dom';
import { API_URL } from 'actions';
import useLoader from 'hooks/useLoader';
import axios from 'axios';
import PageLoader from 'components/molecules/PageLoader/PageLoader';
import NotFoundTemplate from 'templates/NotFoundTemplate';

const DetailsView = () => {
  const [isNotFound, setIsNotFound] = useState(false);
  const [productData, setProductData] = useState({
    id: null,
    name: '',
    description: '',
    category: '',
    image: '',
    size: [],
    price: null,
  });

  const { pathname } = useLocation();
  const [slug] = pathname.split('/').reverse();
  const loading = useLoader();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/products/${slug}`);
        const itemData = {
          id: data.id,
          name: data.name,
          description: data.description,
          category: data.category.name,
          image: data.image,
          size: data.size,
          price: data.price.toFixed(2),
        };
        setProductData(itemData);
      } catch (err) {
        setIsNotFound(true);
      }
    };
    fetchProductData();
  }, [slug]);

  return (
    <>
      <PageLoader isActive={loading} />
      {isNotFound ? (
        <NotFoundTemplate type="Product" />
      ) : (
        <DetailsTemplate productData={productData} />
      )}
    </>
  );
};

export default DetailsView;
