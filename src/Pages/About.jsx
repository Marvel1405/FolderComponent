import styled from "@emotion/styled";
const About = () => {
  return (
    <div>
      <Const>
        <h1>About Us</h1>
      </Const>
    </div>
  );
};

export default About;

const Const = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 70px;
  font-weight: bold;
  color: black;
  display: flex;
  align-item: center;
  justify-content: center;
  background-color: gray;
`;
