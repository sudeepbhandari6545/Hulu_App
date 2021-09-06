import Thumbnail from './Thumbnail'

function Result({ result }) {
  return (
    <div>
      {result.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}

export default Result
