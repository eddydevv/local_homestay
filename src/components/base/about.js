import React, { Component } from 'react'
import { 
  TabContent, 
  TabPane, 
  Nav, 
  NavItem, 
  NavLink, 
  Row, 
  Col 
} from 'reactstrap'
import classnames from 'classnames'

export default class About extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1', 
      hasNav: true
    }
  }

  toggle(tab) {
    if(this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  navTabs() {

  }

  tabContents() {

  }
  
  render() {
    return (
      <div id="about" className="base">
        <section>
          <Row>
            <Col sm="2">
              <Nav vertical tabs>
                <NavItem>
                  <NavLink 
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1') }}
                  >
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink 
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2') }}
                  >
                    How It Works
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink 
                    className={classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3') }}
                  >
                    Team
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink 
                    className={classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4') }}
                  >
                    Billing
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm="10">
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1" className="about-tab">
                  <Row>
                    <Col sm="12">
                      <h4>About Us</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Curabitur gravida arcu ac tortor dignissim convallis aenean. Dignissim sodales ut eu sem integer vitae justo eget magna. Quisque sagittis purus sit amet. Mattis vulputate enim nulla aliquet. In est ante in nibh mauris. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Mus mauris vitae ultricies leo integer malesuada. Ac placerat vestibulum lectus mauris. Parturient montes nascetur ridiculus mus. Elementum tempus egestas sed sed. Blandit volutpat maecenas volutpat blandit. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.

Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Amet purus gravida quis blandit turpis. Amet justo donec enim diam vulputate ut. Amet nulla facilisi morbi tempus. Pharetra magna ac placerat vestibulum lectus. Pretium fusce id velit ut tortor pretium viverra. Pharetra pharetra massa massa ultricies mi quis. Enim diam vulputate ut pharetra. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Amet facilisis magna etiam tempor. Nibh tellus molestie nunc non blandit massa enim. Augue ut lectus arcu bibendum at varius. Lobortis feugiat vivamus at augue eget arcu dictum varius.</p><p>

Elementum curabitur vitae nunc sed velit dignissim sodales ut. Ac odio tempor orci dapibus ultrices in iaculis. Enim sed faucibus turpis in eu mi bibendum neque. Vulputate odio ut enim blandit volutpat maecenas. Eget mi proin sed libero enim sed. Diam quam nulla porttitor massa id. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Enim nec dui nunc mattis enim. Eget nunc lobortis mattis aliquam faucibus purus. Adipiscing enim eu turpis egestas pretium aenean. Sit amet risus nullam eget felis eget nunc lobortis mattis. Nisi vitae suscipit tellus mauris a diam maecenas. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Orci dapibus ultrices in iaculis nunc sed augue lacus. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2" className="about-tab">
                  <Row>
                    <Col sm="12">
                      <h4>How It Works</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Curabitur gravida arcu ac tortor dignissim convallis aenean. Dignissim sodales ut eu sem integer vitae justo eget magna. Quisque sagittis purus sit amet. Mattis vulputate enim nulla aliquet. In est ante in nibh mauris. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Mus mauris vitae ultricies leo integer malesuada. Ac placerat vestibulum lectus mauris. Parturient montes nascetur ridiculus mus. Elementum tempus egestas sed sed. Blandit volutpat maecenas volutpat blandit. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.

Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Amet purus gravida quis blandit turpis. Amet justo donec enim diam vulputate ut. Amet nulla facilisi morbi tempus. Pharetra magna ac placerat vestibulum lectus. Pretium fusce id velit ut tortor pretium viverra. Pharetra pharetra massa massa ultricies mi quis. Enim diam vulputate ut pharetra. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Amet facilisis magna etiam tempor. Nibh tellus molestie nunc non blandit massa enim. Augue ut lectus arcu bibendum at varius. Lobortis feugiat vivamus at augue eget arcu dictum varius.</p><p>

Elementum curabitur vitae nunc sed velit dignissim sodales ut. Ac odio tempor orci dapibus ultrices in iaculis. Enim sed faucibus turpis in eu mi bibendum neque. Vulputate odio ut enim blandit volutpat maecenas. Eget mi proin sed libero enim sed. Diam quam nulla porttitor massa id. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Enim nec dui nunc mattis enim. Eget nunc lobortis mattis aliquam faucibus purus. Adipiscing enim eu turpis egestas pretium aenean. Sit amet risus nullam eget felis eget nunc lobortis mattis. Nisi vitae suscipit tellus mauris a diam maecenas. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Orci dapibus ultrices in iaculis nunc sed augue lacus. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3" className="about-tab">
                  <Row>
                    <Col sm="12">
                      <h4>Team</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Curabitur gravida arcu ac tortor dignissim convallis aenean. Dignissim sodales ut eu sem integer vitae justo eget magna. Quisque sagittis purus sit amet. Mattis vulputate enim nulla aliquet. In est ante in nibh mauris. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Mus mauris vitae ultricies leo integer malesuada. Ac placerat vestibulum lectus mauris. Parturient montes nascetur ridiculus mus. Elementum tempus egestas sed sed. Blandit volutpat maecenas volutpat blandit. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.

Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Amet purus gravida quis blandit turpis. Amet justo donec enim diam vulputate ut. Amet nulla facilisi morbi tempus. Pharetra magna ac placerat vestibulum lectus. Pretium fusce id velit ut tortor pretium viverra. Pharetra pharetra massa massa ultricies mi quis. Enim diam vulputate ut pharetra. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Amet facilisis magna etiam tempor. Nibh tellus molestie nunc non blandit massa enim. Augue ut lectus arcu bibendum at varius. Lobortis feugiat vivamus at augue eget arcu dictum varius.</p><p>

Elementum curabitur vitae nunc sed velit dignissim sodales ut. Ac odio tempor orci dapibus ultrices in iaculis. Enim sed faucibus turpis in eu mi bibendum neque. Vulputate odio ut enim blandit volutpat maecenas. Eget mi proin sed libero enim sed. Diam quam nulla porttitor massa id. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Enim nec dui nunc mattis enim. Eget nunc lobortis mattis aliquam faucibus purus. Adipiscing enim eu turpis egestas pretium aenean. Sit amet risus nullam eget felis eget nunc lobortis mattis. Nisi vitae suscipit tellus mauris a diam maecenas. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Orci dapibus ultrices in iaculis nunc sed augue lacus. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="4" className="about-tab">
                  <Row>
                    <Col sm="12">
                      <h4>Billing</h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam nulla facilisi cras fermentum. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Curabitur gravida arcu ac tortor dignissim convallis aenean. Dignissim sodales ut eu sem integer vitae justo eget magna. Quisque sagittis purus sit amet. Mattis vulputate enim nulla aliquet. In est ante in nibh mauris. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Mus mauris vitae ultricies leo integer malesuada. Ac placerat vestibulum lectus mauris. Parturient montes nascetur ridiculus mus. Elementum tempus egestas sed sed. Blandit volutpat maecenas volutpat blandit. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque.

Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Amet purus gravida quis blandit turpis. Amet justo donec enim diam vulputate ut. Amet nulla facilisi morbi tempus. Pharetra magna ac placerat vestibulum lectus. Pretium fusce id velit ut tortor pretium viverra. Pharetra pharetra massa massa ultricies mi quis. Enim diam vulputate ut pharetra. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Amet facilisis magna etiam tempor. Nibh tellus molestie nunc non blandit massa enim. Augue ut lectus arcu bibendum at varius. Lobortis feugiat vivamus at augue eget arcu dictum varius.</p><p>

Elementum curabitur vitae nunc sed velit dignissim sodales ut. Ac odio tempor orci dapibus ultrices in iaculis. Enim sed faucibus turpis in eu mi bibendum neque. Vulputate odio ut enim blandit volutpat maecenas. Eget mi proin sed libero enim sed. Diam quam nulla porttitor massa id. Enim sit amet venenatis urna cursus eget nunc scelerisque viverra. Enim nec dui nunc mattis enim. Eget nunc lobortis mattis aliquam faucibus purus. Adipiscing enim eu turpis egestas pretium aenean. Sit amet risus nullam eget felis eget nunc lobortis mattis. Nisi vitae suscipit tellus mauris a diam maecenas. Malesuada proin libero nunc consequat interdum varius sit amet mattis. Orci dapibus ultrices in iaculis nunc sed augue lacus. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque.</p>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </section>
      </div>
    )
  }
}