import ArtisticTitle from "./artisticTitle/ArtisticTitle"
import PageTitle from "./pageTitle/PageTitle"
import SectionTitle from "./sectionTitle/SectionTitle"

const Title = ({className, title, color}) => {
    if(className === 'page-title')
        return <PageTitle text="Software development" className={className}/>
    if(className === 'artistic-title')
        return <ArtisticTitle title={title} className={className}/>
    if(className === 'section-title')
        return <SectionTitle className={className} title={title} color={color}/>
}

export default Title