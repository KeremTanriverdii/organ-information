import BrainModels from './components/HeroModels/BrainModels'
import IntestineModels from './components/HeroModels/IntestineModels';
import LungsModels from './components/HeroModels/LungsModels';
import StomachModels from './components/HeroModels/StomachModels';

function App({ select }: { select: string | null }) {
  switch (select) {
    case 'Brain':
      return <BrainModels />;
    case 'Lungs & Heart':
      return <LungsModels />;
    case 'Stomach':
      return <StomachModels />;
    case 'Intestine':
      return <IntestineModels />;
    // Add more cases for other selections if needed
    default: null
  }
  return (
    <div className=''>
      {select === null ? (
        <div className='flex items-center justify-center h-screen'>
          <h1 className='text-2xl font-bold'>Select a model from the sidebar</h1>
        </div>
      ) : (
        <div className='flex items-center justify-center h-screen'>
          <h1 className='text-2xl font-bold'>Model: {select}</h1>
        </div>
      )}
    </div>
  )
}

export default App
