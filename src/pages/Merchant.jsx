import React from 'react'
import "../styles/Merchant.css"
import { Button, Card, CardBody, FormGroup, CardFooter, Form, CardHeader, Col, Container, Input, Label, Row } from 'reactstrap'


function Merchant() {
  return (
    <>
      <div className="addProductPage my-5 mt-3">
        <Card className='shadow-sm mt-5' color='lightgray'>
          <CardHeader><h3 className='text-center'>Add Item</h3></CardHeader>
          <CardBody>
            <Form >
              <div className='my-3'>
                <Label for='name'>Enter Product Name</Label><b><Label style={{ color: "red" }}>*</Label></b>
                <Input type='text' id='name' placeholder='Enter Product Name Here: '></Input>
              </div>
              <div className='my-3'>
                <Label for='name'>Enter product Description</Label><b><Label style={{ color: "red" }}>*</Label></b>
                <Input type='textarea' id='name' placeholder='Enter product Description: '></Input>
              </div>
              <div className='my-3'>
                <Label for="exampleFile">File</Label>
                <Input
                  id="exampleFile"
                  name="file"
                  type="file"
                />
              </div>
              <div className='my-3'>
                <Label for='name'>Enter product Price</Label><b><Label style={{ color: "red" }}>*</Label></b>
                <Input type='text' id='name' placeholder='Enter product Price  '></Input>
              </div>
              <div className='my-3'>
                <Label for='name'>Enter category</Label><b><Label style={{ color: "red" }}>*</Label></b>
                <Input type='text' id='name' placeholder='Enter category Here: '></Input>
              </div>

              <div>
                <Button className='savebtn' block color='success'>Save Changes</Button>
              </div>
              <div >
                <Button className='resetbtn' block color='primary'>Reset</Button>
              </div>

            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  )
}

export default Merchant