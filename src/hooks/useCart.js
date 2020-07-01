import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from 'actions';

const useCart = item => {
  const [isErrorVisible, setErrorVisibility] = useState(false);
  const dispatch = useDispatch();

  const { id, size, quantity, limit } = item;

  const showErrorMessage = () => {
    setErrorVisibility(true);
    setTimeout(() => setErrorVisibility(false), 1000);
  };

  const handleAdd = () => {
    if (quantity < limit)
      dispatch(updateCartItem({ ...item, quantity: quantity + 1 }));
    else showErrorMessage();
  };

  const removeItem = () => {
    dispatch(removeCartItem(id, 'cart', size));
  };

  const handleSubtract = () => {
    if (quantity === 1) removeItem();
    else {
      setErrorVisibility(false);
      dispatch(updateCartItem({ ...item, quantity: quantity - 1 }));
    }
  };

  return [
    isErrorVisible,
    { removeItem, showErrorMessage, handleAdd, handleSubtract },
  ];
};

export default useCart;
