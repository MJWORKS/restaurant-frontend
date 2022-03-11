import Head from "next/head"
import styles from '../../styles/home.module.scss'
import logoImg from '../../public/logo.svg'
import Image from "next/image"
import { Input } from '../components/UI/Input'
import { Button } from "../components/UI/Button"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>MJRestaurant - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter} >
        <Image src={logoImg} alt="Logo pizzaria" />

        <div className={styles.login}>
          <form>
            <Input
              placeholder="Digite seu email"
              type="text"
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
            />

            <Button
              loading={false}
            >
              Acessar
            </Button>
          </form>

          <Link href="/signup"><a className={styles.text}>Não possui uma conta? Cadastre-se</a></Link>

        </div>
      </div>
    </>
  )
}
