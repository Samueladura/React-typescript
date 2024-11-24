import './App.css'
import { Text } from './Components/polymorphic/Text'

function App() {
  return (
    <div>
      <Text as='h1' size='lg' childeren='Heading' />
      <Text as='p' size='md' childeren='Paragraph' />
      <Text as='label' htmlFor='someId' size='sm' color='secondary' childeren='Label' />
    </div>
  )
}

export default App
