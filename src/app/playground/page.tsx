'use client'
import {Button} from '../componnents/button'
import Form from '../componnents/form'
import {PlaygroundContainer} from './style'
import {useState} from 'react'

const Playground = () => {
  const [sendItem, setSendItem] = useState('')
  const handleTextItem = (event) => {
    setSendItem(event.target.value)
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
        <table border="1">
          <thead>
            <tr>
              <th>id</th>
              <th>item</th>
              <th>created at</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
              <td>{sendItem}</td>
              <td>{new Date().getDate()}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </PlaygroundContainer>
  )
}
export default Playground
