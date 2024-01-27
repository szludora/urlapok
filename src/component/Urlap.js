import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";


export default function Urlap(props) {
    const [obj, setObj] = useState({name: "John Doe", date: "2000-12-02"});

    function adatValt(event){
        console.log(event.target.value)
        console.log(event.target.id)
        // console.log(event.target.value)
        const masolat={...obj}
        masolat[event.target.id] = event.target.value
        setObj(masolat)
    }
    function kuldes(){
        event.preventDefault()
        console.log(obj)
        props.kuld(obj)
    }

  return (
    <>
      <Container>
        <Col lg={4} md={6} sm={8} className='m-auto mt-5'>
        <h2>Register</h2>
        <Form onSubmit={kuldes} className='bg-secondary rounded pt-5 pb-5'>
          <Form.Group className="mb-3 w-75 m-auto" id="formBasicEmail">
            <Form.Label style={{color: "white"}}>Full Name</Form.Label>
            <Form.Control type="text"  id="name" onChange={adatValt} value={obj.name} />
          </Form.Group>

          <Form.Group className="mb-3 w-75 m-auto" id="formBasicPassword">
            <Form.Label style={{color: "white"}}>Date of Birth</Form.Label>
            <Form.Control type="date" id="date" onChange={adatValt} value={obj.date} min={1920} max={2024}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        </Col>
        <div style={{position: "relative", bottom: "-25em", left: "0%"}}><p>Made with React<br />By Szlucska Dóra</p></div>
      </Container>
    </>
  );
}
