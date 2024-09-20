import "./App.css";
import { initMercadoPago, Payment } from "@mercadopago/sdk-react";
initMercadoPago(process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY);

function App() {

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    console.log({ selectedPaymentMethod, formData });
  };

  const initialization = {
    amount: 100,
  };
  const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      mercadoPago: "all",
    },
  };

  return (
    <div className="App">
      <Payment
        customization={customization}
        initialization={initialization}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default App;
