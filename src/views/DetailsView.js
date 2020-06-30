/* eslint-disable no-console */
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
  const [productData, setProductData] = useState([
    {
      id: null,
      name: '',
      description: '',
      category: '',
      image: '',
      size: '',
      price: null,
    },
  ]);

  const { pathname } = useLocation();
  const [slug] = pathname.split('/').reverse();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const { data } = await axios.get(`${API_URL}/products/${slug}`);
        setProductData(data);
      } catch (err) {
        console.log(err.response);
        setIsNotFound(true);
      }
    };
    fetchProductData();
  });

  return (
    <>
      <PageLoader isActive={useLoader()} />
      {isNotFound ? (
        <NotFoundTemplate type="Product" />
      ) : (
        <DetailsTemplate productData={productData} />
      )}
    </>
  );
};

export default DetailsView;
