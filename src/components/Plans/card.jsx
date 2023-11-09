import pic from '../../assets/Plans/5-star-rating.png'

function Card({name, age, phone, prize, email}) {
    return (
        <div className='card-plan'>
            <div className="card bg-base-100 shadow-xl" style={{ padding: "0rem 2rem" }}>
                <div className='card-plan-main'>
                    <div>
                        <h1 style={{ textAlign: "center", fontSize: "2.5rem", margin: "1rem 0", fontWeight: "400", color: "#00bbf9", letterSpacing: "1px" }}>Customer Details</h1>
                        <div className='card-plan-text'>
                            <p>Full Name: {name}</p>
                            <p>Email: {email}</p>
                            <p>{age}</p>
                            <p>Phone: {phone}</p>
                            <p>Hospitalization Limit: {prize}</p>
                        </div>
                    </div>
                    <div>
                    <div className='btn-card'>
                        <button>Edit Details</button>
                    </div>
                    <div className='btn-card'>
                        <button>Download Quotes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card