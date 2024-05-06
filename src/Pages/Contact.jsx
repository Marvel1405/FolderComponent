import styled from "@emotion/styled";
const Contact = () => {
  return (
    <div>
      <Const>
        <h1>Contact Us</h1>
      </Const>
    </div>
  );
};

export default Contact;

const Const = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 70px;
  font-weight: bold;
  color: black;
  display: flex;
  align-item: center;
  justify-content: center;
  background-color: peachpuff;
`;
