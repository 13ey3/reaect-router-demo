import { useParams } from 'react-router-dom';

export const Invoice = () => {
  let params = useParams();
  return <h2>Invoice: {params.invoiceId}</h2>;
};
