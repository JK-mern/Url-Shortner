import ReactLoading from 'react-loading';

function Loader() {
  return (
    <div className='flex justify-center items-center  min-h-screen'>
         <ReactLoading type={'spinningBubbles'} color={'#0000FF'} height={'5%'} width={'5%'} />
    </div>
   
  )
}

export default Loader