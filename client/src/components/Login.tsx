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
  hidden
  items-center
  justify-center
  lg:flex

  text-sm
  font-medium
  no-underline
  z-30

`;

const SignUpText = tw.a`
  bg-black
  text-white
  hover:[color: #cfb2f6]
  cursor-pointer
  [font-weight: 500]

  transition-all
  ease-in-out
  duration-200

  rounded-lg

  px-4
  p-1.5
  shadow-lg
`;

const LoginText = tw.a`
  text-white
  hover:[color: #dfdee0]
  cursor-pointer

  [font-weight: 500]

  transition-all
  ease-in-out
  duration-200

  mr-4
`;
export default Login