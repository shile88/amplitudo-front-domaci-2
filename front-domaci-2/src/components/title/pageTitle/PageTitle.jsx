import './PageTitle.css';

const PageTitle = ({text, className}) => {
  return (
    <h1 className={className}>{text}</h1>
  )
}

export default PageTitle