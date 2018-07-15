import React, { Component } from 'react'
import { Player, ControlBar } from 'video-react'
import { Card, CardText, CardBody, CardTitle, Button, CardGroup, CardHeader } from 'reactstrap'

export default class Landing extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
    // this.landingVid = this.landingNav.bind(this)
  }

  get cards() {
    return ([
      {
        title: 'A chance to learn',
        content: 'Maybe blah blah blah'
      },
      {
        title: 'A chance to eat',
        content: 'Okey Dokey'
      },
      {
        title: 'A third card',
        content: 'Just for the heck of it'
      }
    ])
  }
  
  landingNav() {
    return(
      <nav>
          
      </nav>
    )
  }

  landingVid() {
    return (
      <div>
      <Player
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        id="landing-vid"
        style="padding-top: 0"
        playsInline
        autoPlay
        poster="/assets/poster.png" >      
        <ControlBar disableCompletely='true' 
        style="padding-top: 0" />
      </Player>
      </div>
    )
  }

  landingAbout() {
    return (
      <section id='about-section'>
        <CardGroup>
          {this.cards.map((card) => 
            <Card className="md-3 about-card">
              <CardHeader><CardTitle className="about-title">{card.title}</CardTitle></CardHeader>
              <CardBody>
                <CardText>{card.content}</CardText>
                <Button>Learn More</Button>
              </CardBody>
            </Card>
          )}
        </CardGroup>
      </section>
    )
  }

  render() {
    return(
      <div>
        {this.landingVid()}
        {this.landingAbout()}
      </div>
    )
  }
}