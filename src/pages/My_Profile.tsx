import mancuernas from "../assets/imgs/mancuernas.jpg"
import Data_user from "../components/Data_user"


const My_Profile = () => {



    return (
        <div className='container-fluid' style={{
            backgroundImage: `url(${mancuernas})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div className="row py-5">
                <div className="col-xl-6 col-md-6 m-auto">
                    <Data_user />
                </div>
            </div>
        </div>
    )
}

export default My_Profile