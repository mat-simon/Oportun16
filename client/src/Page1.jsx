import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import { ListGroup ,FormControl, InputGroup, Table, Container, Row, Col } from 'react-bootstrap';
import {getInstance} from './utils/ToolCalcs';



export function Page1(props){

    const Tool = getInstance();

    const {active} = props;

    const [padI, setpadI] = useState('');
    const [padC, setpadC] = useState('');
    const [cfaI, setcfaI] = useState('');
    const [cfaC, setcfaR] = useState('');
    const [rsI, setrsI] = useState('');
    const [rsC, setrsR] = useState('');
    const [plmrI, setplmrI] = useState('');
    const [plmrC, setplmrR] = useState('');
    const [slmrI, setslmrI] = useState('');
    const [slmrC, setslmrR] = useState('');
    const [tc, settc] = useState('');
    const [slp, setslp] = useState('');

    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [buttonDisabled2, setButtonDisabled2] = useState(true);
    const [buttonDisabled3, setButtonDisabled3] = useState(true);
    const [buttonDisabled4, setButtonDisabled4] = useState(true);
    const [buttonDisabled5, setButtonDisabled5] = useState(true);
    const [buttonDisabled6, setButtonDisabled6] = useState(true);
    const [buttonDisabled7, setButtonDisabled7] = useState(true);
    const [buttonDisabled8, setButtonDisabled8] = useState(true);
    const [buttonDisabled9, setButtonDisabled9] = useState(true);
    const [buttonDisabled10, setButtonDisabled10] = useState(true);
    const [buttonDisabled11, setButtonDisabled11] = useState(true);
    const [buttonDisabled12, setButtonDisabled12] = useState(true);

    const handleSelectpadI=(value)=>{
        Tool.setPADInherent(value-1);
        Tool.calculateTreeInherents();
        //get potentially changed values of calculated variables
        Tool.getState();
        //update visuals of those variables
        setpadI(value);
        setButtonDisabled(false);
    }
    const handleSelectpadC=(value)=>{
        Tool.setPADControls(value-1);
        Tool.calculateTreeResiduals();
        setpadC(value);
        setButtonDisabled2(false);
    }
    const handleSelectcfaI=(value)=>{
        Tool.setCFAInherent(value-1);
        Tool.calculateTreeInherents();
        setcfaI(value);
        setButtonDisabled3(false);
    }
    const handleSelectcfaC=(value)=>{
        Tool.setCFAControls(value-1);
        Tool.calculateTreeResiduals();
        setcfaR(value);
        setButtonDisabled4(false);
    }
    const handleSelectrsI=(value)=>{
        Tool.setRSInherent(value-1);
        Tool.calculateTreeInherents();
        setrsI(value);
        setButtonDisabled5(false);
    }
    const handleSelectrsC=(value)=>{
        Tool.setRSControls(value-1);
        Tool.calculateTreeResiduals();
        setrsR(value);
        setButtonDisabled6(false);
    }
    const handleSelectplmrI=(value)=>{
        Tool.setPLMRInherent(value-1);
        Tool.calculateTreeInherents();
        setplmrI(value);
        setButtonDisabled7(false);
    }
    const handleSelectplmrC=(value)=>{
        Tool.setPLMRControls(value-1);
        Tool.calculateTreeResiduals();
        setplmrR(value);
        setButtonDisabled8(false);
    }
    const handleSelectslmrI=(value)=>{
        Tool.setSLMRInherent(value-1);
        Tool.calculateTreeInherents();
        setslmrI(value);
        setButtonDisabled9(false);
    }
    const handleSelectslmrC=(value)=>{
        Tool.setSLMRControls(value-1);
        Tool.calculateTreeResiduals();
        setslmrR(value);
        setButtonDisabled10(false);
    }
    const handleSelecttc=(value)=>{
        Tool.setTC(value-1);
        Tool.calculateTree();
        settc(value);
        setButtonDisabled11(false);}
    const handleSelectslp=(value)=>{
        Tool.setSLP(value-1);
        Tool.calculateTree();
        setslp(value);
        setButtonDisabled12(false);
    }

    const handleClick=(e)=>{
        alert("You chose " + padI + " and " + padC);
    }

    return(
      
        <div hidden={!active}>


<Container fluid="l">
      <Row>
        <Col lg="8">
            <Row>
                <Col>  
    <div>
  <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Asset At Risk</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  
   <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Threat Community</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  
   <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Loss Event</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  
   <InputGroup size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text style = {{width:170}} id="inputGroup-sizing">Type of Loss Event</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
 
  
  
  
  
  </div>

    
                </Col>
        <Col>
         <div>
  <InputGroup  size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text style = {{width:100}} id="inputGroup-sizing">Analyst</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  
   <InputGroup style = {{ height: 125}} size="sm" className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text style = {{width:100, textAlign: 'center'}} id="inputGroup-sizing">Notes</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl style = {{height: 125}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
  </InputGroup>
  
  </div>
        </Col>
    </Row>
    
    <Row>
        <Col>This is where that big chart goes</Col>
    </Row>
    
        </Col>
        <Col>
        <Container fluid>
  <Row>
    <Col>
    <Table striped bordered hover>
      <thead>
        <tr>
            <th>Summary</th>
            <th>Inherent</th>
            <th>Residual</th>
      
        </tr>
      </thead>
  <tbody>
    <tr>
      <td>Overall Risk</td>
      <td>Very High</td>
      <td>Very Low</td>
    </tr>
    <tr>
      <td>Primary LM</td>
      <td> &#60;$9,999 </td>
      <td> &#60;$9,999</td>
    </tr>
    <tr>
      <td>Secondary LM</td>
      <td>&#60;$10,000,000</td>
      <td>&#60;$100,000</td>
    </tr>
  </tbody>
 
</Table>
    <Row>
    <Col>
    <ListGroup variant="flush" style={{fontSize:15}}>
  <ListGroup.Item style={{fontWeight: 'bold'}}>Loss Magnitude</ListGroup.Item>
  <ListGroup.Item>1. &#60;$9,999</ListGroup.Item>
  <ListGroup.Item>2. $10,000 to $99,999</ListGroup.Item>
  <ListGroup.Item>3. $100,000 to $999,999</ListGroup.Item>
  <ListGroup.Item>4. $1,000,000 to $9,999,999</ListGroup.Item>      
 <ListGroup.Item>5. &#62;$10,000,000</ListGroup.Item>
</ListGroup>
<br/>
    <ListGroup variant="flush" style={{fontSize:15}}>
  <ListGroup.Item   style={{fontWeight: 'bold'}}>Loss Magnitude </ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
    </Col>
    <Col>
    <ListGroup variant="flush"  style={{fontSize:15}}>
  <ListGroup.Item style={{fontWeight: 'bold'}}>Probability</ListGroup.Item>
  <ListGroup.Item>1. 0% to 10%</ListGroup.Item>
  <ListGroup.Item>2. 10% to 30%</ListGroup.Item>
  <ListGroup.Item>3. 30% to 70%</ListGroup.Item>
  <ListGroup.Item>4. 70% to 90%</ListGroup.Item>
  <ListGroup.Item>5. 90% to 100%</ListGroup.Item>
</ListGroup>
<br/>
    <ListGroup variant="flush">
  <ListGroup.Item>Loss Magnitude</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
    </Col>
  </Row>
  <Row>
    <Col>
    <ListGroup variant="flush">
  <ListGroup.Item style={{fontWeight: 'bold'}}>Resistance Strength</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
</ListGroup>
    
    
    
    </Col>
  </Row>
    
    </Col>
  </Row>
</Container>
       </Col>
  </Row>
</Container>

       
            <Button  onClick={handleClick} disabled={buttonDisabled || buttonDisabled2 || buttonDisabled3 || buttonDisabled4 || buttonDisabled5 || buttonDisabled6 || buttonDisabled7 || buttonDisabled8 || buttonDisabled9 || buttonDisabled10 || buttonDisabled11 || buttonDisabled12} style={{backgroundColor: '#0B0C10', borderColor: '#45A293', color: '#45A293', borderRadius: '100px'}} >Submit</Button>{' '}
            <DropdownButton title={padI} id = "PADInherent">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectpadI(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectpadI(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectpadI(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectpadI(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectpadI(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={padC} id = "PADControls">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectpadC(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectpadC(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectpadC(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectpadC(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectpadC(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={cfaI} id = "CFAInherent">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectcfaI(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectcfaI(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectcfaI(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectcfaI(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectcfaI(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={cfaC} id = "CFAControls">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectcfaC(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectcfaC(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectcfaC(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectcfaC(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectcfaC(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={rsI} id = "RSInherent">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectrsI(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectrsI(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectrsI(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectrsI(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectrsI(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={rsC} id = "RSControls">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectrsC(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectrsC(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectrsC(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectrsC(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectrsC(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={plmrI} id = "PLMRInherent">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectplmrI(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectplmrI(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectplmrI(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectplmrI(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectplmrI(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={plmrC} id = "PLMRControls">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectplmrC(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectplmrC(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectplmrC(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectplmrC(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectplmrC(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={slmrI} id = "SLMRInherent">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslmrI(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslmrI(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslmrI(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslmrI(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslmrI(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={slmrC} id = "SLMRControls">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslmrC(5)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslmrC(5)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslmrC(5)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslmrC(5)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslmrC(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={tc} id = "TC">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelecttc(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelecttc(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelecttc(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelecttc(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelecttc(5)}>5</Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={slp} id = "SLP">
                <Dropdown.Item eventKey="1" onSelect={()=>handleSelectslp(1)}>1</Dropdown.Item>
                <Dropdown.Item eventKey="2" onSelect={()=>handleSelectslp(2)}>2</Dropdown.Item>
                <Dropdown.Item eventKey="3" onSelect={()=>handleSelectslp(3)}>3</Dropdown.Item>
                <Dropdown.Item eventKey="4" onSelect={()=>handleSelectslp(4)}>4</Dropdown.Item>
                <Dropdown.Item eventKey="5" onSelect={()=>handleSelectslp(5)}>5</Dropdown.Item>
            </DropdownButton>
           
            <h4>You selected {padI} and {padC}</h4>
        </div>
    );
}
<Table striped bordered hover>
  <thead>
    <tr>
      <th>Summary</th>
      <th>Inherent</th>
      <th>Residual</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Overall Risk</td>
      <td>Very High</td>
      <td>Very Low</td>
    </tr>
    <tr>
      <td>Primary LM</td>
      <td> &#60;$9,999 </td>
      <td> &#60;$9,999</td>
    </tr>
    <tr>
      <td>Secondary LM</td>
      <td>&#60;$10,000,000</td>
      <td>&#60;$100,000</td>
    </tr>
  </tbody>
</Table>

