import { useState } from 'react'
import BoardgameList from '../components/BoardgameList'
import PaginationComponent from '../components/PaginationComponent'
import useAxios from '../hooks/useAxios'

const BoardgamePage = () => {

  const [currentBoardgames, setCurrentBoardgames] = useState(null)
	const { loading, data } = useAxios(`http://localhost:3001/api/boardgames`)

  return (
    <div>
			{loading === false && 
			<PaginationComponent 
				boardgames={data} 
				boardgamesPerPage={40} 
				setCurrentBoardgames={setCurrentBoardgames} 
			/>}

			{currentBoardgames?.length > 0 && 
				<BoardgameList 
					boardgames={currentBoardgames} 
				/>}
    </div>
  )
}

export default BoardgamePage
