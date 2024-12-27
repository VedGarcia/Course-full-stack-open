import Header from '../Header'
import Content from '../Content'

const Course = ({ course }) => (
    <div>
      <Header course={course} />
      <Content course={course}/>
    </div>
  )

  export default Course