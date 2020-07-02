import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StyledToastContainer = styled(ToastContainer)`
  .custom-toast {
    background-color: ${({ theme }) => theme.white};
    padding: 20px;
    font-family: inherit;
    color: ${({ theme }) => theme.dark};
  }
  .Toastify__close-button {
    color: ${({ theme }) => theme.dark};
  }
  .Toastify__toast--error {
    border-left: 4px solid ${({ theme }) => theme.red100};
  }
`;

const Notifications = () => (
  <StyledToastContainer
    autoClose={4000}
    position="bottom-right"
    hideProgressBar
    className="custom-toast-container"
    toastClassName="custom-toast"
  />
);

export default Notifications;
