import ArtisticTitle from "./artisticTitle/ArtisticTitle"
import PageTitle from "./pageTitle/PageTitle"
import SectionTitle from "./sectionTitle/SectionTitle"

const Title = ({type, title, color}) => {
    if(type === 'page-title')
        return <PageTitle text="Software development" className={type}/>
    if(type === 'artistic-title')
        return <ArtisticTitle title={title} className={type}/>
    if(type === 'section-title')
        return <SectionTitle className={type} title={title} color={color}/>
}

export default Title