'use client'
import {IconCircleDashedCheck, IconClockHour3, IconRun} from '@tabler/icons-react'
import {Button} from '../componnents/button'
import Form from '../componnents/form'
import {Card, FooterCard, MyList, TitleList} from '../componnents/list/style'
import {SectionContainerList} from '../componnents/sectionList'
import {PlaygroundContainer} from './style'
import {useState} from 'react'
import axios from 'axios'

//CORRIGIR ERROS NA FUNCIONALIDADE DO PRISMA

const Playground = () => {
  const [sendItem, setSendItem] = useState('')
  const handleTextItem = (event) => {
    setSendItem(event.target.value)
  }

  const [apiDatas, setApiDatas] = useState()
  const handleRequestDatas = async ({}: TaskDatas) => {
    const request = await axios.get('')
    const reply = request.data
    setApiDatas(reply)
    return apiDatas //se n funcionar inserir o reply
  }

  return (
    <PlaygroundContainer>
      <span>
        <h2>Playground</h2>
      </span>
      <section>
        <small>Working...</small>
        <Form>
          <label htmlFor="text">Add new item</label>
          <input type="text" onChange={handleTextItem} value={sendItem} />
          <Button onClick={() => alert('ERRO!')}>Submit</Button>
        </Form>
        <SectionContainerList>
          <MyList>
            <TitleList>
              <div>
                <IconClockHour3 size={25} stroke={2} />
              </div>
              <div>
                <h3>Pendente</h3>
              </div>
            </TitleList>
            <Card>
              <small>cada coluna deverá mostrar apenas tarefas de acordo com o seu ESTADO</small>
              <div>
                <h4>IPOG V2</h4>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, molestias neque
                  iure minus voluptates unde minima hic obcaecati dolor exercitationem mollitia
                  nostrum libero velit nobis sapiente optio repellendus! Neque, excepturi!
                </p>
              </div>
              <FooterCard>
                <Button>Action</Button>
              </FooterCard>
            </Card>
          </MyList>
          <MyList>
            <TitleList>
              <div>
                <IconRun size={25} stroke={2} />
              </div>
              <div>
                <h3>Em processo</h3>
              </div>
            </TitleList>
            <Card>
              <small>cada coluna deverá mostrar apenas tarefas de acordo com o seu ESTADO</small>
              <FooterCard>
                <Button>Action</Button>
              </FooterCard>
            </Card>
          </MyList>
          <MyList>
            <TitleList>
              <div>
                <IconCircleDashedCheck size={25} stroke={2} />
              </div>
              <div>
                <h3>Finalizado</h3>
              </div>
            </TitleList>
            <Card>
              <small>cada coluna deverá mostrar apenas tarefas de acordo com o seu ESTADO</small>
              <FooterCard>
                <Button>Action</Button>
              </FooterCard>
            </Card>
          </MyList>
        </SectionContainerList>
      </section>
    </PlaygroundContainer>
  )
}
export default Playground
