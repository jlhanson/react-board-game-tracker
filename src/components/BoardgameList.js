import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const BoardgameList = ({ boardgames }) => {
  return (
    <div>
      <Container fluid="md">
        <Row>
          {boardgames.map((boardgame) => (
            <Col key={boardgame._id}>
              <Card
                border="dark"
                style={{ width: '14rem', margin: '0 0 1rem' }}
              >
                <Card.Img variant="top" src={boardgame.image_url} />
                <Card.Body>
                  <Card.Title>{boardgame.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default BoardgameList
