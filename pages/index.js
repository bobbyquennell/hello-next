import Header from '../components/Header';
import styled from 'styled-components';

const Title = styled.h1`
color:red;
font-size: 50px;
`
const Index = () => (
  <div>
    this is home page.
    <Header></Header>
    <Title>My Page</Title>
  </div>
)

export default Index;