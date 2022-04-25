import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const BoardgameList = ({ boardgames }) => {
  console.log(boardgames)
  return (
    <div>
      <Row className="container-fluid">
        {boardgames.map((boardgame) => (
          <Col key={boardgame._id}>
            <Card style={{ width: '10rem' }}>
              <Card.Img variant="top" src={boardgame.image_url} />
              <Card.Body>
                <Card.Title>{boardgame.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default BoardgameList
