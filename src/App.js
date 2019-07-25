import React,{Component} from "react";
import {Container,Row,Col,Media,Alert,Button,Badge,Breadcrumb,Card} from "react-bootstrap";

class App extends Component{
  render(){
    return(

      <Container>
      <br />
        <Row>
          <Col>
            <Alert variant="primary">Website React Bootstrap</Alert>
          </Col>

          <Col>

          </Col>

          <Col>
            <Button variant="primary">
              Notification <Badge variant="light">9</Badge>
            </Button>
            <Button variant="primary">
              Message <Badge variant="light">19</Badge>
            </Button>
          </Col>

          <Col>
            <Media>
              <img
                width={20}
                height={20}
                className="mr-3"
                src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
                alt="logo"
              /><b>Andreas</b>
            </Media>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
          </Col>

          <Col>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Berita</Breadcrumb.Item>
              <Breadcrumb.Item href="/">Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>

        <br />

        <Row>
          <Col>
            <Card style={{width:"250px"}}>
              <Card.Img
                variant="top"
                src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"
              />
              <Card.Body>
                <Card.Title>Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
                <Card.Text>
                  Godin sekarang menjadi pemain Uruguay dengan Caps terbanyaksetelah membantu
                  negaranya melibas thailand di final Piala Tiongkok. Diego Godin boleh
                  bangga setelah menjadi-
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>

          </Col>

          <Col>
            <Card style={{width:"250px"}}>
              <Card.Img
                variant="top"
                src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600"
              />
              <Card.Body>
                <Card.Title>Neymar Bahas Kontrak Baru di Paris Saint Germain</Card.Title>
                <Card.Text>
                  Ayah sang pemain asal Brasil berusaha meredam rumor ketertarikan Madrid.
                  Neymar sedang berdiskusi dengan Paris saint Germain soal perpanjangan kontrak
                  bersama kampiun ligue 1 Prancis, demikian kata ayahnya-
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{width:"250px"}}>
              <Card.Img
                variant="top"
                src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"
              />
              <Card.Body>
                <Card.Title>Inggris Ingin Menjadi Tim Terabik Dunia</Card.Title>
                <Card.Text>
                  Kumpulan talenta yang dimiliki Inggris saat ini membuat Barkley
                  sangat optimistis. Ross Barkley merasa sudah berada di jalur yang benar
                   untuk menjadi tim terkuat di dunia dengan banyaknya muncul talenta terbaik
                   saat ini-
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{width:"250px"}}>
              <Card.Img
                variant="top"
                src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"
              />
              <Card.Body>
                <Card.Title>Sani Rizki Fauzi Tegaskan Mental Pemain U-23 Tetap Bagus</Card.Title>
                <Card.Text>
                  Gelandang Tim Nasional U-23, Sani Rizki Fauzi, menegaskan kesiapanya untuk melawan
                  Brunei Darussalam U-23. Kedua Tim akan Bentrok pada laga pamungkas Grup K.
                </Card.Text>
                <Button variant="primary">Read More</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    )
  }
}

export default App;
