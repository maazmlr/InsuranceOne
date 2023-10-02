import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import claim from "../../assets/About/claim.png"
import free from "../../assets/About/free.png"
import service from "../../assets/About/services.png"

function AboutCard() {
  return (
    <CardGroup >
      <Card border='none'	>
        <Card.Img variant="top" src={claim} style={{height:'12em',width:'15rem'}} className='mx-auto d-block' />
        <Card.Body>
          <Card.Title className='mx-auto '>Claim assistance</Card.Title>
          <Card.Text className='mx-auto '>
          Your policy claim is on us. Just let us know!

          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card border='none'> 
        <Card.Img variant="top" src={free} style={{height:'12em',width:'15rem'}}  className='mx-auto d-block'/>
        <Card.Body>
          <Card.Title className='mx-auto '>Best rates
</Card.Title>
          <Card.Text className='mx-auto '>
          We ensure best rates among competitors.
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card border='none'>
        <Card.Img variant="top" src={service} style={{height:'12em',width:'15rem'}}  className='mx-auto d-block' />
        <Card.Body  className='mx-auto '>
          <Card.Title  className='mx-auto '>Free of cost service
</Card.Title>
          <Card.Text>
          We don't charge for any service & assistance.

          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
  );
}

export default AboutCard;