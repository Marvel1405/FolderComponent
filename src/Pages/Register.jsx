import styled from "@emotion/styled";
const Register = () => {
  return (
    <div>
      <Const>
        <Card>
          <LeftCard>
            Don't have an account?
            <br />
            Sign up with us to Enjoy our services
          </LeftCard>
          <RightCard></RightCard>
        </Card>
      </Const>
    </div>
  );
};

export default Register;

const RightCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  border-radius: 0px 10px 10px 0px;
  color: black;
  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
    background-color: lightgray;
    border-radius: 10px 10px 10px 10px;
  }
`;
const LeftCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  border-radius: 10px 0px 0px 10px;
  color: black;
  background-color: lightgray;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Card = styled.div`
  width: 60%;
  height: 90%;
  // background-color: lightgray;
  margin-top: 30px;
  display: flex;
  border-radius: 10px 10px 10px 10px;
  :hover {
    box-shadow: 1px 1px 10px 2px rgba(0, 0, 0, 0.3);
    transition: all ease-in-out 250ms;
  }
  @media (max-width: 768px) {
    width: 80%;
    height: 400px;
    background-color: lightgray;
    border-radius: 10px 10px 10px 10px;
`;
const Const = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 70px;
  font-weight: bold;
  color: black;
  display: flex;
  align-item: center;
  justify-content: center;
  background-color: white;
`;
