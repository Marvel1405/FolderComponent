import styled from "@emotion/styled";
const Services = () => {
  return (
    <div>
      <Const>
        <h1>Our Services</h1>
      </Const>
    </div>
  );
};

export default Services;

const Const = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 70px;
  font-weight: bold;
  color: black;
  display: flex;
  align-item: center;
  justify-content: center;
  background-color: lightgray;
`;
