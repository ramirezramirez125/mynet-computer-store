import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useProductContext } from '../../state/context/productContext';
import { useState, useEffect } from 'react';

const PaypalCheckoutButton = ({ cartAmount }) => {
  const { clearCart } = useProductContext();
  const [paymentOk, setPaymentOk] = useState('');

  useEffect(() => {
    if (paymentOk.length > 1) {
      clearCart();
    }
    // eslint-disable-next-line
  }, [paymentOk]);

  return (
    <div>
      <PayPalScriptProvider
        options={{
          'client-id': `${process.env.NEXT_PUBLIC_REACT_APP_PAYPAL_CLIENT_ID}`,
        }}
      >
        <div>
          <PayPalButtons
            style={{
              color: 'blue',
            }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: cartAmount,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(details => {
                const name = details.payer.name.given_name;
                // alert(`Transaction completed by ${name}`);
                setPaymentOk(`Thank you ${name}, the transaction completed.`);
              });
            }}
          />
        </div>
      </PayPalScriptProvider>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ color: '#19a695', marginBottom: '2.5rem' }}>
          {paymentOk}
        </h3>
      </div>
    </div>
  );
};

export default PaypalCheckoutButton;
