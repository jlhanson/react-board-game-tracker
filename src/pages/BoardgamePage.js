import { useState } from 'react'
import { Spinner } from 'react-bootstrap'
import BoardgameList from '../components/BoardgameList'
import PaginationComponent from '../components/PaginationComponent'
import useAxios from '../hooks/useAxios'

const BoardgamePage = () => {
  const [currentBoardgames, setCurrentBoardgames] = useState(null)
  const BG_URL = '/api/boardgames'
  const { loading, data } = useAxios(BG_URL)

  return (
    <div>
      {loading === true ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <PaginationComponent
          boardgames={data}
          boardgamesPerPage={40}
          setCurrentBoardgames={setCurrentBoardgames}
        />
      )}

      {currentBoardgames?.length > 0 && (
        <BoardgameList boardgames={currentBoardgames} />
      )}
    </div>
  )
}

export default BoardgamePage
