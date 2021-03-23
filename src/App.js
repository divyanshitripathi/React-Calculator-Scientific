import React, { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoIosSwitch } from 'react-icons/io';
import { FaBackspace } from 'react-icons/fa';
import './App.css';



function App() {

  const [result, setResult] = useState("");
  const inputRef = useRef(null);
  const [show, setShow] = useState(false);

  function numberLog10() {
    setResult(Math.log10(result).toString());

  }

  function fact() {
    const r = factorial(n);
    return setResult(r.toString());
  };

  const n = result;

  function factorial(n) {
    if (n === 0)
      return 1;
    let f = 1;
    for (let i = 1; i < n; i++) {
      f = f * (i + 1);
    }
    return f;
  }

  function numberLog() {
    setResult(Math.log(result).toString());
  }

  function exponent() {
    setResult(Math.exp(result).toString());
  }
  function sin() {
    setResult(Math.sin(result).toString());
  }

  function inversion() {
    setResult((1 / result).toString());
  }

  function squareroot() {
    setResult(Math.sqrt(result).toString());
  }

  function handleClick(e) {
    setResult(result.concat(e.target.name));

  }

  function del() {
    setResult(result.slice(0, result.length - 1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    //if (result === "log.name") {
    //setResult(Math.log(result).toString());
    //}
    //else {
    try {
      setResult(eval(result).toString());
    }
    catch (error) {
      setResult(alert('Clear All then Enter again'));
    }
    //}
  }
  return (
    <div className="App">
      <Container fluid>
        <div>
          <h2> React Calculator </h2><br /><br />
          <Row className="justify-content-md-center" xs={1} md={4} lg={4}>
            <Form>
              <input id="input" className="inputfield" type="text" value={result} ref={inputRef}></input>
              {/*<ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
               {}
              </ReactCSSTransitionGroup>*/}
              <hr />
            </Form>
          </Row>
        </div>
        <div>
          {show ? <Row className="justify-content-md-center" xs={1} md={4} lg={4}>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={squareroot} name="7" block>Sqrt</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={sin} block>Sin</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="3.14" block>pi</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="(" block>(</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name=")" block>)</Button></Col>
          </Row> : null}
          <Row className="justify-content-md-center" xs={1} md={4} lg={4}>
            {show ? <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={inversion} block>1/X</Button></Col> : null}
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="7" block>7</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="8" block>8</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="9" block>9</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="/" block>/</Button></Col>
          </Row>
          <Row className="justify-content-md-center" xs={1} md={4} lg={4}>
            {show ? <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={numberLog10} name="lg" block>lg</Button></Col> : null}
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="4" block>4</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="5" block>5</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="6" block>6</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="-" block>-</Button></Col>
          </Row>
          <Row className="justify-content-md-center" xs={1} md={4} lg={4}>
            {show ? <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={numberLog} block>In</Button></Col> : null}
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="1" block>1</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="2" block>2</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="3" block>3</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="+" block>+</Button></Col>
          </Row>
          <Row className="justify-content-md-center" xs={1} md={4} lg={4}>
            {show ? <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={exponent} block>e</Button></Col> : null}
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="0" block>0</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="." block>.</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={calculate} name="=" block>=</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="*" block>&times;</Button></Col>
          </Row>
          <Row className="justify-content-md-center" xs={4} md={4} lg={4}>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={() => setShow(!show)} id="collapse" block><IoIosSwitch /></Button></Col>
            {show ? <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={fact} block>X!</Button></Col> : null}
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={del} id="delete" block><FaBackspace /></Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={clear} id="clear" block>AC</Button></Col>
            <Col xs="3" md="1" lg="1" className="btn"><Button variant="outline-primary" onClick={handleClick} name="%" block>%</Button></Col>
          </Row>
        </div>




      </Container>
    </div>
  );
}
export default App;
