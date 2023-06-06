import './SectionTitle.css';

const SectionTitle = ({title, className, color}) => {
  return (
    <h2 className={`${className} ${color} ? 'blue' : ''`}>{title}</h2>
  )
}

export default SectionTitle