import React, { Component } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";
import MoviesPage from "./components/pages/MoviesPage";
import { Link, Route, Routes } from "react-router-dom";

import { menuStyle, fixedMenuStyle } from "./helpers/styleHelper";

class App extends Component {
  state = {
    menuFixed: null,
    overlayFixed: false,
  };

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickTopMenu = () => this.setState({ menuFixed: null });

  render() {
    const { menuFixed } = this.state;

    return (
      <div className="App">
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed ? "top" : undefined}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container text>
              <Menu.Item>
                <Image
                  size="mini"
                  src="https://react.semantic-ui.com/logo.png"
                />
              </Menu.Item>
              <Menu.Item header>Movie App</Menu.Item>
              <Menu.Item as={Link} to="/movies">
                {" "}
                Movies
              </Menu.Item>
              <Menu.Item as="a">Add New</Menu.Item>
            </Container>
          </Menu>
        </Visibility>
        <Container text>
          <Routes>
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </Container>
        <hr />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        suscipit? Qui voluptatem ipsa delectus, perferendis alias numquam,
        nesciunt est architecto officiis, non sapiente accusamus tempore saepe
        autem eligendi amet consequatur! Pariatur alias modi consectetur eos ex
        mollitia soluta? Recusandae voluptate enim consequatur sunt officia
        cumque quod assumenda tempore, eveniet porro, exercitationem soluta
        quisquam. Praesentium nemo harum in recusandae, consequuntur velit!
        Veritatis autem, minima molestiae doloribus voluptatum consectetur
        praesentium rem, quaerat non perspiciatis cum amet iste. Perspiciatis
        cum esse exercitationem ratione provident labore laborum, temporibus
        architecto, magnam beatae magni vel. Veniam? Aperiam possimus unde
        laboriosam atque assumenda quis molestias nihil magnam qui dolores quae,
        earum impedit eligendi explicabo consequuntur minus vitae iure inventore
        quam eos repellendus itaque a commodi veniam? Harum! Iste nulla
        voluptatum, ullam, maiores ex odit repellendus placeat accusantium unde
        quasi quaerat iusto officiis officia, itaque omnis corrupti veritatis
        nesciunt odio. Reiciendis excepturi alias voluptates nam dolore
        voluptate quam. Aspernatur corrupti voluptas placeat recusandae ipsam
        incidunt ab doloremque aut amet tempore, maxime eos minus architecto
        pariatur labore. Natus exercitationem itaque porro ratione a omnis alias
        iste ducimus praesentium ea? Voluptatibus facere maxime itaque laborum
        autem enim fugit quo. Iusto animi, quo nostrum aperiam exercitationem
        voluptatum accusantium, provident officia sit pariatur natus error quod
        facilis deserunt repellendus in reiciendis molestiae? Odit eligendi
        veritatis blanditiis quis excepturi minima aperiam molestias, velit,
        laborum rerum veniam quidem explicabo enim accusantium eveniet ipsam
        soluta aliquid iure quod expedita dolor fugit eos? Eum, sit? Tenetur!
        Excepturi sunt mollitia sit. Nostrum exercitationem sit, tempore placeat
        vero similique sed est accusantium illum. Corrupti nemo exercitationem
        harum esse eveniet assumenda? Aliquid soluta, accusantium debitis libero
        deleniti laudantium distinctio. Adipisci temporibus numquam animi,
        inventore cumque iusto libero molestias debitis beatae assumenda
        reprehenderit vero unde optio est consectetur nihil fuga rerum pariatur?
        Laudantium eos voluptate necessitatibus in adipisci eum excepturi!
        <Segment
          inverted
          style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
          vertical
        >
          <Container textAlign="center">
            <Grid columns={4} divided stackable inverted>
              <Grid.Row>
                <Grid.Column>
                  <Header inverted as="h4" content="Group 1" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as="h4" content="Group 2" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as="h4" content="Group 3" />
                  <List link inverted>
                    <List.Item as="a">Link One</List.Item>
                    <List.Item as="a">Link Two</List.Item>
                    <List.Item as="a">Link Three</List.Item>
                    <List.Item as="a">Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as="h4" content="Footer Header" />
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            <Image
              src="https://react.semantic-ui.com/logo.png "
              centered
              size="mini"
            />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
