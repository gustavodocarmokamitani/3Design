import React from 'react';
import { Button } from 'react-bootstrap';
import "./BtnOrcamento.scss";

const BtnOrcamento = ({children}) => (    
    <Button className="Btn-Orcamento">{children}</Button>    
);

export default BtnOrcamento;