import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/head/Header'
import Apply from '../components/helpers/application/Apply'
import Profile2 from '../components/profile/Profile2'

export default function Application() {
    const [forOtherDisplay, setForOtherDisplay] = React.useState(true)
    const { id, typeId } = useParams()
    console.log(id);
    return (
        <>
            <Header />
            <div style={{ marginTop: '5rem' }}></div>
            {
                forOtherDisplay ?
                    <Profile2 forOtherDisplay={forOtherDisplay} setForOtherDisplay={setForOtherDisplay} id={id} />
                    :
                    <Apply id={id} typeId={typeId} />
            }
        </>
    )
}
