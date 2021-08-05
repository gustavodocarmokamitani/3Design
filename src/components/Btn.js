import React from 'react';
import { Button } from 'react-bootstrap';
import "./Btn.scss";

const Btn = ({children}) => (    
    <Button className="Btn-Contact">{children}</Button>    
);

export default Btn;