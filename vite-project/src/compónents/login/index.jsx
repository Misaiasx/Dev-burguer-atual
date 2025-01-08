import { Container } from "./styles"

export function Login()  {


    return(

       <Container>

      <LeftContainer>
        <img src={Logo}  alt="logo-devburguer"/>
        </LeftContainer>

        <RightConteiner>
            <Title>
                OLá, Seja bem vindo <span>
                    Login e senha.
                </span>
            </Title>
            <Form>
                <InputContainer>
                    <label>Email</label>
                    <input type="email"/>
                </InputContainer>

                <InputContainer>
                <label>Email</label>
                <input type="password"/>
              </InputContainer>
              <Link> Esqueci minha senha. </Link>
              <Button> Entrar</Button>
            </Form>
            <Link> Não possui conta? Clique aqui
            </Link>
        </RightConteiner>

       </Container>
          
     
    );
}