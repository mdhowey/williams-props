import Card from 'Card'

const CardList = ({ jobs }) => {
  return (
    <div>
      {
        jobs.map((job, index) => {
          console.log(index);
          return <Card job={job} key={index} />
        })
      }
    </div>
  )
}
export default CardList