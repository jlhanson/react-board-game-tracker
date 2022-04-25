import { useState, useEffect } from "react"
import { Pagination } from "react-bootstrap"

const PaginationComponent = ({ boardgames, boardgamesPerPage, setCurrentBoardgames }) => {

	const [pageCount, setPageCount] = useState(0)
	const [pageOffset, setPageOffset] = useState(0)
	const [page, setPage] = useState(1)

	useEffect(() => {
		const endOffset = pageOffset + boardgamesPerPage
		console.log(`loading items from ${pageOffset} to ${endOffset}`)
		setCurrentBoardgames(boardgames.slice(pageOffset, endOffset))
		setPageCount(Math.ceil(boardgames.length / boardgamesPerPage))
	}, [boardgames, pageOffset, boardgamesPerPage, setCurrentBoardgames])

	const createPaginationItem = (i) => {
		return <Pagination.Item
			key={i}
			active={i === page}
			onClick={() => handlePageClick(i)}
			> 
				{i}
			</Pagination.Item>
	}

	// initial creation of all pagination item pages
	const paginationItems = []
	for (let i = 1; i <= pageCount; i++) {
		paginationItems.push(createPaginationItem(i))
	}

	// updates pagination display depending on current page
	const displayPaginationItems = () => {
		let paginationToDisplay = []
		if (page < 3) {
			for (let i = 1; i <= 5; i++) {
				paginationToDisplay.push(paginationItems[i-1])
			}
		}
		else if (page > pageCount - 2) {
			for (let i = pageCount - 5; i <= pageCount; i++) {
				paginationToDisplay.push(paginationItems[i])
			}
		}
		else {
			for (let i = page - 3; i <= page + 1; i++) {
				paginationToDisplay.push(paginationItems[i])
			}
		}
		return(
			<>
				{paginationToDisplay}
			</>
		)
	}

	const handlePageClick = (selectedPageNum) => {
		const newOffset = (selectedPageNum - 1) * boardgamesPerPage % boardgames.length
		console.log(`User requested page number ${selectedPageNum}, which is offset ${newOffset}`)
		setPage(selectedPageNum)
		setPageOffset(newOffset)
	}

	const handleButtonClick = (e) => {
		const selectedComponent = e.target.textContent
		switch (selectedComponent) {
			case '«':
			case '«First':
				setPageOffset(0)
				setPage(1)
				break;
			case '‹':
			case '‹Previous':
				if (page > 1) {
					setPageOffset((currentOffset) => currentOffset - boardgamesPerPage)
					setPage((currentPage) => currentPage - 1)
				}
				break;
			case '›':
			case '›Next':
				if (page < pageCount) {
					setPageOffset((currentOffset) => currentOffset + boardgamesPerPage)
					setPage((currentPage) => currentPage + 1)
				}
				break;
			case '»':
			case '»Last':
				setPageOffset((pageCount - 1) * boardgamesPerPage % boardgames.length)
				setPage(pageCount)
				break;
			default:
				break;
		}
	}

	return(
		<>
			<Pagination>
				<Pagination.First 
					onClick={handleButtonClick} 
					disabled={page === 1} />
				<Pagination.Prev 
					onClick={handleButtonClick} 
					disabled={page === 1} />
				{displayPaginationItems()}
				<Pagination.Next 
					onClick={handleButtonClick} 
					disabled={page === pageCount} />
				<Pagination.Last 
					onClick={handleButtonClick} 
					disabled={page === pageCount}/>
			</Pagination>
		</>
	)

}

export default PaginationComponent