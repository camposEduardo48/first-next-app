import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from './componnents/header'
import SideMenu from './componnents/menu'
import {getCssText, globalStyles, styled} from '@/stitches.config'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'ICE',
  description:
    'Aplicativo criado com o framework NextJs, estilizado com Styled Stitches, backend sendo elaborado em NodeJs e utilizando o ORM Prisma.',
}

globalStyles()

const Container = styled('main', {
  display: 'flex',
  marginTop: '80px',
  gap: '1rem',
})

const Main = styled('section', {
  display: 'flex',
  width: '100%',
  padding: '1rem',
  border: '1px solid red',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}} />{' '}
        {/**essa linha é extremamente importante para o funcionamento do Stiches no código */}
      </head>
      <body className={inter.className}>
        <Header />
        <Container>
          <SideMenu />
          <Main>{children}</Main>
        </Container>
      </body>
    </html>
  )
}
