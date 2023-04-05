import { Button, message } from 'antd'

function App() {
  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <Button
          onClick={() => {
            message.success('everything is ok')
          }}
          className='bg-black text-white'
        >
          OK
        </Button>
      </div>
    </div>
  )
}

export default App
