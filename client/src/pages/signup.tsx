import FromSignUp from 'components/FromSignUp'

export default function SignUp() {
  return (
    <>
      <img src="/img/topo-signup.png" />
      <h1
        style={{ marginTop: '71px', display: 'flex', justifyContent: 'center' }}
      >
        Cadastre-se para começar a montar seu álbum
      </h1>
      <FromSignUp />
    </>
  )
}
