import Header from "./components/vievs/Header/Header";
import Footer from "./components/vievs/Footer/Footer";
import { Container } from "react-bootstrap";
import React from "react";
import { Route,Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound/NotFound";
import Home from "./components/pages/Home/Home";
import SinglePost from "./components/features/SinglePost/SinglePost";
import PostAdd from "./components/vievs/PostAdd/PostAdd";
import PostEdit from "./components/vievs/PostEdit/PostEdit";
import About from "./components/pages/About/About";



const App = () => {
  return (
  <Container>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post/:id" element={<SinglePost />} />
      <Route path="/post/add" element={<PostAdd />} />
      <Route path="/post/edit/:id" element={<PostEdit />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </Container>
  );
};

export default App;
