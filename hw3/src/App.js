import './App.css';
import { Avatar, Card, Anchor, Col, Row } from 'antd';
import { FacebookOutlined, InstagramOutlined , LinkedinOutlined, GithubOutlined} from '@ant-design/icons';
import chImage from './img/ch.jpg'

const { Meta } = Card;

function handerClickImage(href) {
  window.open(href, '_blank').focus();
}

function App() {
  return (
    <>
      <div className='nav-bar'>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: 'part-1',
              href: '#part-1',
              title: 'Home',
            },
            {
              key: 'part-2',
              href: '#part-2',
              title: 'Education',
            },
            {
              key: 'part-3',
              href: '#part-3',
              title: 'Internship',
            },
            {
              key: 'part-4',
              href: '#part-4',
              title: 'Portfolio',
            }
          ]}
        />
      </div>
      <div>
        <div
          id="part-1"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: 'tan',
            top: '50%', 
            left: '50%'
          }}
        >
          <Row
            style={{
              height: 300,
              justifyContent: "center"
            }}
          >
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  width: 300,
                }}
                cover={
                  <img
                    alt="ch"
                    src={chImage}
                  />
                }
                actions={[
                  <FacebookOutlined key="fb" onClick={()=>{handerClickImage("https://www.facebook.com/profile.php?id=100003010495357")}} />,
                  <InstagramOutlined key="ig" onClick={()=>{handerClickImage("https://www.instagram.com/ye110w_chi_red/")}} />,
                  <LinkedinOutlined key="link" onClick={()=>{handerClickImage("https://www.linkedin.com/in/%E5%95%9F%E5%AE%8F-%E9%BB%83-a0b6b8240/")}} />,
                  <GithubOutlined key="git" onClick={()=>{handerClickImage("https://github.com/wesley331102")}} />
                ]}
              >
                <Meta
                  avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                  title="Chi-Hung Huang"
                  description={<><p>(+886)927-022-489</p><p>wesley331102@gmail.com</p></>}
                />
              </Card>
            </Col>
          </Row>
        </div>
        <div
          id="part-2"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: 'midnightblue',
          }}
        >
          <Row
            style={{
              height: 600,
              justifyContent: "center"
            }}
          >
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1
              }}
            >
              <Card 
                title="Education"
                style={{
                  width: 600,
                }}
              >
                <Card type="inner" title="National Taiwan University">
                  <p>Bachelor of Information Management</p>
                  <p>Master of Information Management</p>
                </Card>
                <Card
                  style={{
                    marginTop: 16,
                  }}
                  type="inner"
                  title="Activity"
                >
                  <p className='p-list'>Vice Coordinator - Grand Occasion of Information Management</p>
                  <p className='p-list'>Activities Department - Student Association of Information Management</p>
                </Card>
              </Card>
            </Col>
          </Row>
        </div>
        <div
          id="part-3"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: 'skyblue',
          }}
        >
          <Row
            style={{
              height: 600,
              justifyContent: "center"
            }}
          >
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1
              }}
            >
              <Card 
                title="Internship"
                style={{
                  width: 800,
                }}
              >
                <Card type="inner" title="Microsoft - RD intern">
                  <p className='p-list'>Internet Banking - Develop a bank web app, including front-end and web-API</p>
                  <p className='p-list'>Admin Web - Develop an admin web, allowing administrators to manage data and control permissions</p>
                  <p className='p-list'>Component Development - Speed up the sprint burndown by developing shared services and pipes</p>
                </Card>
                <Card
                  style={{
                    marginTop: 16,
                  }}
                  type="inner"
                  title="International Trust Machines Corporation - RD intern"
                >
                  <p className='p-list'>Load Testing - Test maximum user limit of the server</p>
                  <p className='p-list'>Front-End Automated Testing - Simulate user's operation</p>
                </Card>
              </Card>
            </Col>
          </Row>
        </div>
        <div
          id="part-4"
          style={{
            width: '100vw',
            height: '100vh',
            textAlign: 'center',
            background: '#CCD6A6',
          }}
        >
          <Row
            style={{
              height: 600,
              justifyContent: "center"
            }}
          >
            <Col
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1
              }}
            >
              <Card 
                title="Portfolio"
                style={{
                  width: 700,
                }}
              >
                <Card type="inner" title="Industry-Academia Cooperation">
                  <p className='p-list'>Sinotech Engineering Consultants, LTD. - Automated Escape Route Project</p>
                  <p className='p-list'>Famistore Famiport - Pickup Rate Forecast Project</p>
                </Card>             
                <Card
                  style={{
                    marginTop: 16,
                  }}
                  type="inner"
                  title="Project"
                >
                  <p className='p-list'>Project on Information Management - Face Recognition based on Neural Network</p>
                </Card>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default App;
