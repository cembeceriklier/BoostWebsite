import tw from "twin.macro"

const Login = () => {

  return (
    <UserLoginContainer>
      <LoginText>LOG IN</LoginText>
      <SignUpText>SIGN UP</SignUpText>
    </UserLoginContainer>
  )
}

const UserLoginContainer = tw.div`
  flex
  items-center
  justify-center

  text-white
  text-sm
  lg:text-xs
  font-medium
  no-underline
  cursor-pointer

  lg:hidden

  [min-width: 200px]
`;

const SignUpText = tw.a`
  px-5
  py-1.5

  border
  border-red-700
  rounded-lg


`;

const LoginText = tw.a`
  mx-4
`;
export default Login