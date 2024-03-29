import './App.css';
import { Avatar, Card, Anchor, Col, Row, Button, Input, Space, message } from 'antd';
import { FacebookOutlined, InstagramOutlined , LinkedinOutlined, GithubOutlined} from '@ant-design/icons';
import chImage from './img/ch.jpg'
import { getUrl, guess } from './axios'
import { useState } from 'react'

function App() {
  
  const { Meta } = Card;

  const [messageApi, contextHolder] = message.useMessage();
  
  const [notRobot, setNotRobot] = useState(false)
  const [number, setNumber] = useState('')

  const success = (msg) => {
    messageApi.open({
      type: 'loading',
      content: msg,
    });
  };

  const error = (msg) => {
    messageApi.open({
      type: 'error',
      content: msg,
    });
  };
  
  const warning = (msg) => {
    messageApi.open({
      type: 'warning',
      content: msg,
    });
  };

  const handleGuess = async () => {
    let stat = await guess(number)
    if (stat.type === 'correct'){
      success(stat.msg)
      await new Promise(r => setTimeout(r, 3000));
      setNotRobot(true)
    } else if (stat.type === 'warning'){
      warning(stat.msg)
    } else{
      error(stat.msg)
    }
  }

  const handleGetFbUrl = async () => {
    let href = await getUrl("fb")
    window.open(href, '_blank').focus();
  }

  const handleGetIgUrl = async () => {
    let href = await getUrl("ig")
    window.open(href, '_blank').focus();
  }

  const handleGetLinkUrl = async () => {
    let href = await getUrl("link")
    window.open(href, '_blank').focus();
  }

  const handleGetGitUrl = async () => {
    let href = await getUrl("git")
    window.open(href, '_blank').focus();
  }

  const test = (
    <>
      {contextHolder}
      <div
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'slateblue',
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
              title="I am not a robot"
              style={{
                width: 600,
              }}
            >
              <Card type="inner" title="Guess a number from 1 to 100">
                <Space.Compact
                  style={{
                    width: '100%',
                  }}
                >
                  <Input
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                  <Button 
                    type="primary" 
                    onClick={handleGuess}
                    disabled={!number}>
                      Guess
                  </Button>
                </Space.Compact>
              </Card>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )

  const content = (
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
                  <FacebookOutlined key="fb" onClick={handleGetFbUrl} />,
                  <InstagramOutlined key="ig" onClick={handleGetIgUrl} />,
                  <LinkedinOutlined key="link" onClick={handleGetLinkUrl} />,
                  <GithubOutlined key="git" onClick={handleGetGitUrl} />
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
  )

  return (
    <>{notRobot ? content : test}</>
  );
}

export default App;
